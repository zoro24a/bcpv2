from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.student import Student
from app.schemas.student_schema import StudentOut, StudentCreate
from app.auth.role_middleware import RoleChecker

router = APIRouter()
admin_checker = RoleChecker(["admin"])

@router.get("/", response_model=List[StudentOut], dependencies=[Depends(admin_checker)])
async def get_students(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Student))
    return result.scalars().all()

@router.post("/", response_model=StudentOut, dependencies=[Depends(admin_checker)])
async def create_student(student_in: StudentCreate, db: AsyncSession = Depends(get_db)):
    new_student = Student(**student_in.dict())
    db.add(new_student)
    await db.commit()
    await db.refresh(new_student)
    return new_student

@router.post("/bulk", dependencies=[Depends(admin_checker)])
async def bulk_upload_students():
    # Placeholder for Excel/Bulk Logic
    return {"message": "Bulk student upload logic placeholder"}
