from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.request import Request
from app.schemas.request_schema import RequestOut, RequestCreate, RequestUpdate
from app.services.workflow_service import WorkflowService
from app.auth.role_middleware import get_current_user, RoleChecker

router = APIRouter()

student_checker = RoleChecker(["student"])
tutor_checker = RoleChecker(["tutor", "hod", "principal", "office"])

@router.post("/", response_model=RequestOut, dependencies=[Depends(student_checker)])
async def create_request(req_in: RequestCreate, db: AsyncSession = Depends(get_db)):
    new_req = Request(
        student_id=req_in.student_id,
        certificate_type=req_in.certificate_type,
        reason=req_in.reason,
        status="pending_tutor"
    )
    db.add(new_req)
    await db.commit()
    await db.refresh(new_req)
    return new_req

@router.get("/", response_model=List[RequestOut])
async def list_requests(current_user: dict = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    # Basic list logic, in production filter by role/department
    result = await db.execute(select(Request))
    return result.scalars().all()

@router.put("/{id}/approve", response_model=RequestOut)
async def approve_request(
    id: int, 
    update: RequestUpdate, 
    current_user: dict = Depends(get_current_user), 
    db: AsyncSession = Depends(get_db)
):
    req = await WorkflowService.transition_status(
        db, id, update.action, current_user["user_id"], update.remarks
    )
    if not req:
        raise HTTPException(status_code=400, detail="Invalid request transition")
    return req

@router.put("/{id}/return", response_model=RequestOut)
async def return_request(
    id: int, 
    update: RequestUpdate, 
    current_user: dict = Depends(get_current_user), 
    db: AsyncSession = Depends(get_db)
):
    req = await WorkflowService.return_request(
        db, id, current_user["user_id"], update.remarks
    )
    if not req:
        raise HTTPException(status_code=400, detail="Invalid request operation")
    return req
