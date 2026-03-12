from sqlalchemy import Column, String, Integer, Enum, ForeignKey, Text, DateTime, func
from sqlalchemy.orm import relationship
from app.database.connection import Base

class Request(Base):
    __tablename__ = "requests"
    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    certificate_type = Column(String(255), nullable=False)
    reason = Column(Text, nullable=False)
    status = Column(Enum('pending_tutor', 'pending_hod', 'pending_principal', 'ready_for_issue', 'issued', 'returned'), default='pending_tutor')
    created_at = Column(DateTime, server_default=func.now())

    student = relationship("Student")
    history = relationship("RequestHistory", back_populates="request")

class RequestHistory(Base):
    __tablename__ = "request_history"
    id = Column(Integer, primary_key=True, autoincrement=True)
    request_id = Column(Integer, ForeignKey("requests.id"), nullable=False)
    action = Column(Enum('submitted', 'approved_tutor', 'approved_hod', 'approved_principal', 'returned', 'issued'), nullable=False)
    action_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())

    request = relationship("Request", back_populates="history")
    actor = relationship("User")
