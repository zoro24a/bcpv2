from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from app.database.connection import get_db
from app.models.certificate import Certificate
from app.services.certificate_service import CertificateService
from app.auth.role_middleware import RoleChecker, get_current_user

router = APIRouter()
office_checker = RoleChecker(["office"])

@router.post("/issue/{request_id}")
async def issue_cert(
    request_id: int, 
    current_user: dict = Depends(office_checker), 
    db: AsyncSession = Depends(get_db)
):
    cert = await CertificateService.issue_certificate(db, request_id, current_user["user_id"])
    if not cert:
        raise HTTPException(status_code=400, detail="Unable to issue certificate")
    return cert

@router.get("/issued", response_model=List[dict])
async def list_issued(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Certificate))
    certs = result.scalars().all()
    return certs
