from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy import select, func
from app.models.requests import Request

class CertificateService:
    @staticmethod
    def generate_certificate_number(db: Session):
        year = datetime.now().year
        # Count requests already issued in current academic year
        result = db.execute(select(func.count(Request.id)).where(Request.status == "issued"))
        count = result.scalar() + 1
        return f"ACE/BCP/{year}/{str(count).zfill(4)}", year, count

    @staticmethod
    def issue_certificate(db: Session, request_id: int, issuer_id: str):
        result = db.execute(select(Request).where(Request.id == request_id))
        req = result.scalars().first()
        if not req or req.status != "approved":
            return None
        
        cert_no, year, serial_num = CertificateService.generate_certificate_number(db)
        
        req.certificate_number = cert_no
        req.year = year
        req.serial_number = serial_num
        req.issued_at = datetime.now()
        req.status = "issued"
        req.pdf_url = f"/certificates/ACE_BCP_{year}_{str(serial_num).zfill(4)}.pdf"
        
        db.commit()
        db.refresh(req)
        return req
