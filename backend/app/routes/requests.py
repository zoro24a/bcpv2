from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.requests import Request
from app.models.students import Student
from app.schemas.request_schema import RequestOut, RequestCreate, RequestUpdate
from app.services.workflow_service import WorkflowService
from app.auth.role_middleware import get_current_user, RoleChecker

router = APIRouter()

student_checker = RoleChecker(["student"])
tutor_checker = RoleChecker(["tutor", "hod", "principal", "office"])

@router.post("/", response_model=RequestOut, dependencies=[Depends(student_checker)])
def create_request(req_in: RequestCreate, db: Session = Depends(get_db)):
    # 1. Fetch the student to determine their routing hierarchy
    student = db.execute(select(Student).where(Student.id == req_in.student_id)).scalars().first()
    
    if not student:
        raise HTTPException(status_code=404, detail="Student ledger record not found.")

    if not student.tutor_id or not student.hod_id:
         raise HTTPException(status_code=400, detail="Assignment Error: Your profile is missing a Tutor or HOD assignment. Please contact administration.")

    new_req = Request(
        student_id=req_in.student_id,
        tutor_id=student.tutor_id,
        hod_id=student.hod_id,
        batch_id=student.batch_id,
        type=req_in.type,
        sub_type=req_in.sub_type,
        reason=req_in.reason,
        company_block=req_in.company_block,
        duration_block=req_in.duration_block,
        status="pending_tutor"
    )
    db.add(new_req)
    db.commit()
    db.refresh(new_req)
    return new_req

@router.get("/", response_model=List[RequestOut])
def list_requests(current_user: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    # Basic list logic, in production filter by role/department
    result = db.execute(select(Request))
    return result.scalars().all()

@router.put("/{id}/approve", response_model=RequestOut)
def approve_request(
    id: int, 
    update: RequestUpdate, 
    current_user: dict = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    req = WorkflowService.transition_status(
        db, id, update.action, current_user["user_id"], update.remarks
    )
    if not req:
        raise HTTPException(status_code=400, detail="Invalid request transition")
    return req

@router.put("/{id}/return", response_model=RequestOut)
def return_request(
    id: int, 
    update: RequestUpdate, 
    current_user: dict = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    req = WorkflowService.return_request(
        db, id, current_user["user_id"], update.remarks
    )
    if not req:
        raise HTTPException(status_code=400, detail="Invalid request operation")
    return req
