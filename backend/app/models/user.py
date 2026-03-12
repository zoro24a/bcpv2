from sqlalchemy import Column, String, Integer, Enum, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from app.database.connection import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    role = Column(Enum('admin', 'hod', 'tutor', 'principal', 'office', 'student'), nullable=False)
    full_name = Column(String(255), nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=True)
    created_at = Column(DateTime, server_default=func.now())

    department = relationship("Department", foreign_keys=[department_id])
