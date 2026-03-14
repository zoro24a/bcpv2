from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import List
import uuid
from app.database.connection import get_db
from app.models.profiles import Profile
from app.schemas.profile_schema import ProfileCreate, ProfileOut
from app.auth.password_hash import get_password_hash
from app.auth.role_middleware import RoleChecker

router = APIRouter()
admin_checker = RoleChecker(["admin"])

@router.get("/", response_model=List[ProfileOut], dependencies=[Depends(admin_checker)])
def get_tutors(db: Session = Depends(get_db)):
    result = db.execute(select(Profile).where(Profile.role == "tutor"))
    return result.scalars().all()

@router.post("/", response_model=ProfileOut, dependencies=[Depends(admin_checker)])
def onboard_tutor(request: ProfileCreate, db: Session = Depends(get_db)):
    # Check for existing email
    email_exists = db.execute(select(Profile).where(Profile.email == request.email)).scalars().first()
    if email_exists:
        raise HTTPException(status_code=400, detail="Identity protocol failure: Email already registered in system ledger.")

    new_tutor = Profile(
        id=str(uuid.uuid4()),
        first_name=request.first_name,
        last_name=request.last_name,
        email=request.email,
        password_hash=get_password_hash(request.password),
        gender=request.gender,
        role='tutor',
        department_id=request.department_id,
        phone_number=request.phone_number
    )
    db.add(new_tutor)
    db.commit()
    db.refresh(new_tutor)
    return new_tutor
