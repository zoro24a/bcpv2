from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.batches import Batch
from app.models.students import Student
from app.schemas.batch_schema import BatchOut, TutorAssignmentRequest
from app.auth.role_middleware import RoleChecker

router = APIRouter()
admin_checker = RoleChecker(["admin"])

@router.get("/", response_model=List[BatchOut], dependencies=[Depends(admin_checker)])
def get_batches(db: Session = Depends(get_db)):
    result = db.execute(select(Batch).where(Batch.status == "active"))
    return result.scalars().all()

@router.post("/{batch_id}/assign-tutor", dependencies=[Depends(admin_checker)])
def assign_tutor_to_batch(batch_id: int, request: TutorAssignmentRequest, db: Session = Depends(get_db)):
    if batch_id != request.batch_id:
        raise HTTPException(status_code=400, detail="Batch ID mismatch in protocol.")

    # Verify batch exists
    batch = db.execute(select(Batch).where(Batch.id == batch_id)).scalars().first()
    if not batch:
        raise HTTPException(status_code=404, detail="Batch cohort not found.")

    # Update the batch's current semester if provided
    batch.current_semester = request.semester

    # Update all active students in this batch to have the assigned tutor
    students = db.execute(select(Student).where(Student.batch_id == batch_id)).scalars().all()
    
    for student in students:
        student.tutor_id = request.tutor_id

    db.commit()
    
    return {"message": f"Successfully assigned tutor to {len(students)} students in batch {batch.name}."}
