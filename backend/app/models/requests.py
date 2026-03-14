from sqlalchemy import Column, String, Integer, Enum, ForeignKey, Text, DateTime, func
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import CHAR
from app.database.connection import Base

class Request(Base):
    __tablename__ = "requests"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(Integer, ForeignKey("students.id"), index=True, nullable=False)
    
    date = Column(DateTime, server_default=func.now())
    type = Column(String(255), nullable=False)
    sub_type = Column(String(255), nullable=True)
    reason = Column(Text, nullable=False)
    
    status = Column(Enum('pending_tutor', 'pending_hod', 'pending_principal', 'approved', 'rejected', 'issued'), index=True, default='pending_tutor')
    
    template_id = Column(Integer, ForeignKey("templates.id"), nullable=True)
    
    return_reason = Column(Text, nullable=True)
    pdf_url = Column(String(255), nullable=True)
    
    certificate_number = Column(String(100), nullable=True)
    issued_at = Column(DateTime, nullable=True)
    
    tutor_id = Column(CHAR(36), ForeignKey("profiles.id"), nullable=True)
    hod_id = Column(CHAR(36), ForeignKey("profiles.id"), nullable=True)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=True)
    
    company_block = Column(Text, nullable=True) # For internship requests etc.
    duration_block = Column(String(255), nullable=True)
    
    created_at = Column(DateTime, server_default=func.now())
    
    # Fields for numbering
    year = Column(Integer, nullable=True)
    serial_number = Column(Integer, nullable=True)

    # Relationships
    student = relationship("Student")
    template = relationship("Template")
    batch = relationship("Batch")
    tutor = relationship("Profile", foreign_keys=[tutor_id])
    hod = relationship("Profile", foreign_keys=[hod_id])
    history = relationship("RequestHistory", back_populates="request")
