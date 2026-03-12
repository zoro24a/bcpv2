from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from app.models.certificate import Certificate
from app.models.request import Request

class CertificateService:
    @staticmethod
    async def generate_certificate_number(db: AsyncSession):
        year = datetime.now().year
        # Count certificates in current academic year
        result = await db.execute(select(func.count(Certificate.id)))
        count = result.scalar() + 1
        return f"ACE/BC/{year}/{str(count).zfill(4)}"

    @staticmethod
    async def issue_certificate(db: AsyncSession, request_id: int, issuer_id: int):
        result = await db.execute(select(Request).where(Request.id == request_id))
        req = result.scalars().first()
        if not req or req.status != "ready_for_issue":
            return None
        
        cert_no = await CertificateService.generate_certificate_number(db)
        new_cert = Certificate(
            request_id=request_id,
            certificate_number=cert_no,
            issued_by=issuer_id,
            pdf_url=f"/certificates/{cert_no.replace('/', '_')}.pdf"
        )
        
        req.status = "issued"
        db.add(new_cert)
        await db.commit()
        await db.refresh(new_cert)
        return new_cert
