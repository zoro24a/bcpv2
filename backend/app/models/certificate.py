from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from app.database.connection import Base

class Certificate(Base):
    __tablename__ = "certificates"
    id = Column(Integer, primary_key=True, autoincrement=True)
    request_id = Column(Integer, ForeignKey("requests.id"), unique=True, nullable=False)
    certificate_number = Column(String(100), unique=True, nullable=False)
    issued_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    issued_at = Column(DateTime, server_default=func.now())
    pdf_url = Column(String(255), nullable=True)

    request = relationship("Request")
    issuer = relationship("User")
