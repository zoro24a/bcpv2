from sqlalchemy import Column, String, Integer, Enum, ForeignKey, Text, DateTime, func
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import CHAR
from app.database.connection import Base

class RequestHistory(Base):
    __tablename__ = "request_history"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    request_id = Column(Integer, ForeignKey("requests.id"), nullable=False)
    
    action = Column(String(100), nullable=False) # Simplified to string as actions vary
    action_by = Column(CHAR(36), ForeignKey("profiles.id"), nullable=False)
    
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())

    request = relationship("Request", back_populates="history")
    actor = relationship("Profile")
