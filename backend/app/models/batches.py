from sqlalchemy import Column, String, Integer, DateTime, func, ForeignKey, Date
from sqlalchemy.orm import relationship
from app.database.connection import Base

class Batch(Base):
    __tablename__ = "batches"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    section = Column(String(10), nullable=True)
    
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    
    student_count = Column(Integer, default=0)
    total_sections = Column(Integer, default=1)
    status = Column(String(50), default="active")
    
    current_semester = Column(Integer, nullable=True)
    semester_from_date = Column(Date, nullable=True)
    semester_to_date = Column(Date, nullable=True)
    
    created_at = Column(DateTime, server_default=func.now())

    # Relationship
    department = relationship("Department")
