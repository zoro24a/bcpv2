from sqlalchemy import Column, String, Integer, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import CHAR
from app.database.connection import Base

class Student(Base):
    __tablename__ = "students"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    register_number = Column(String(50), unique=True, index=True, nullable=False)
    parent_name = Column(String(255), nullable=True)
    
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=True)
    profile_id = Column(CHAR(36), ForeignKey("profiles.id"), unique=True, nullable=True)
    tutor_id = Column(CHAR(36), ForeignKey("profiles.id"), nullable=True)
    hod_id = Column(CHAR(36), ForeignKey("profiles.id"), nullable=True)
    
    created_at = Column(DateTime, server_default=func.now())

    # Relationships
    batch = relationship("Batch")
    tutor = relationship("Profile", foreign_keys=[tutor_id])
    hod = relationship("Profile", foreign_keys=[hod_id])
