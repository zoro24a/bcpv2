from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.students import Student
from app.models.profiles import Profile
from app.models.batches import Batch
from app.schemas.student_schema import StudentOut, StudentCreate, StudentEnrollRequest
from app.auth.password_hash import get_password_hash
from app.auth.role_middleware import RoleChecker
import uuid
from datetime import datetime

router = APIRouter()
admin_checker = RoleChecker(["admin"])

@router.get("/", response_model=List[StudentOut], dependencies=[Depends(admin_checker)])
def get_students(db: Session = Depends(get_db)):
    result = db.execute(select(Student))
    return result.scalars().all()

@router.post("/enroll", response_model=StudentOut, dependencies=[Depends(admin_checker)])
def enroll_student(request: StudentEnrollRequest, db: Session = Depends(get_db)):
    # Check for existing email in Profile
    email_exists = db.execute(select(Profile).where(Profile.email == request.email)).scalars().first()
    if email_exists:
        raise HTTPException(status_code=400, detail="Identity protocol failure: Email already registered in system ledger.")

    # Check for existing register_number in Student
    reg_exists = db.execute(select(Student).where(Student.register_number == request.register_number)).scalars().first()
    if reg_exists:
        raise HTTPException(status_code=400, detail="Identity protocol failure: Register number already synchronized in registry.")

    # Check for existing batch
    batch_query = select(Batch).where(
        Batch.name == request.batch_name,
        Batch.department_id == request.department_id
    )

    if request.section:
        batch_query = batch_query.where(Batch.section == request.section)
    else:
        batch_query = batch_query.where(Batch.section.is_(None))

    batch = db.execute(batch_query).scalars().first()

    if not batch:
        batch = Batch(
            name=request.batch_name,
            section=request.section,
            department_id=request.department_id,
            created_at=datetime.utcnow()
        )
        db.add(batch)
        db.flush()

    # 1. Create Profile
    new_profile = Profile(
        id=str(uuid.uuid4()),
        first_name=request.first_name,
        last_name=request.last_name,
        email=request.email,
        password_hash=get_password_hash(request.password),
        gender=request.gender,
        role='student',
        department_id=request.department_id,
        batch_id=batch.id
    )
    db.add(new_profile)
    db.flush() # Get the profile ID
    
    # 2. Create Student
    new_student = Student(
        register_number=request.register_number,
        parent_name=request.parent_name,
        batch_id=batch.id,
        profile_id=new_profile.id
    )
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

@router.post("/bulk", dependencies=[Depends(admin_checker)])
def bulk_upload_students():
    # Placeholder for Excel/Bulk Logic
    return {"message": "Bulk student upload logic placeholder"}
