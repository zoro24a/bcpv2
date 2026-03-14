from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.departments import Department
from app.schemas.department_schema import DepartmentCreate, DepartmentOut

router = APIRouter()

@router.get("/", response_model=List[DepartmentOut])
def get_departments(db: Session = Depends(get_db)):
    result = db.execute(select(Department))
    return result.scalars().all()

@router.post("/", response_model=DepartmentOut)
def create_department(dept: DepartmentCreate, db: Session = Depends(get_db)):
    new_dept = Department(name=dept.name, established_year=dept.established_year)
    db.add(new_dept)
    db.commit()
    db.refresh(new_dept)
    return new_dept
