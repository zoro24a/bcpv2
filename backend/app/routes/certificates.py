from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.requests import Request
from app.services.certificate_service import CertificateService
from app.auth.role_middleware import RoleChecker, get_current_user

router = APIRouter()
office_checker = RoleChecker(["office"])

@router.post("/issue/{request_id}")
def issue_cert(
    request_id: int, 
    current_user: dict = Depends(office_checker), 
    db: Session = Depends(get_db)
):
    cert = CertificateService.issue_certificate(db, request_id, current_user["user_id"])
    if not cert:
        raise HTTPException(status_code=400, detail="Unable to issue certificate")
    return cert

@router.get("/issued", response_model=List[dict])
def list_issued(db: Session = Depends(get_db)):
    result = db.execute(select(Request).where(Request.status == "issued"))
    certs = result.scalars().all()
    return certs
