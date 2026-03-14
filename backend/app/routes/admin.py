from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, select
from app.database.connection import get_db
from app.models.profiles import Profile
from app.models.students import Student
from app.models.departments import Department
from app.models.requests import Request
from app.auth.role_middleware import RoleChecker

router = APIRouter()
admin_checker = RoleChecker(["admin"])

@router.get("/dashboard/stats", dependencies=[Depends(admin_checker)])
def get_admin_stats(db: Session = Depends(get_db)):
    # Count pending requests
    pending_statuses = ["pending_tutor", "pending_hod", "pending_principal"]
    pending_requests = db.scalar(
        select(func.count()).select_from(Request).where(Request.status.in_(pending_statuses))
    )
    
    # Count total departments
    total_departments = db.scalar(
        select(func.count()).select_from(Department)
    )
    
    # Count total students
    total_students = db.scalar(
        select(func.count()).select_from(Student)
    )
    
    # Count total tutors
    total_tutors = db.scalar(
        select(func.count()).select_from(Profile).where(Profile.role == "tutor")
    )
    
    return {
        "pending_requests": pending_requests or 0,
        "total_departments": total_departments or 0,
        "total_students": total_students or 0,
        "total_tutors": total_tutors or 0
    }
