from sqlalchemy import Column, String, Integer, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import CHAR
from app.database.connection import Base

class TutorAssignment(Base):
    __tablename__ = "tutor_assignments"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=False)
    section = Column(String(10), nullable=True)
    tutor_id = Column(CHAR(36), ForeignKey("profiles.id"), nullable=False)
    
    semester = Column(Integer, nullable=False)
    academic_year = Column(String(20), nullable=False) # e.g. "2025-26"
    
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    # Relationships
    batch = relationship("Batch")
    tutor = relationship("Profile")
