from sqlalchemy import Column, String, Integer, DateTime, func, ForeignKey, Enum
from sqlalchemy.orm import relationship
from app.database.connection import Base

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    register_number = Column(String(50), unique=True, nullable=False)
    parent_name = Column(String(255), nullable=True)
    gender = Column(Enum('Male', 'Female', 'Other'), nullable=True)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=True)
    created_at = Column(DateTime, server_default=func.now())

    user = relationship("User")
    batch = relationship("Batch")
