from sqlalchemy import Column, String, Integer, DateTime, func
from app.database.connection import Base

class Department(Base):
    __tablename__ = "departments"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    established_year = Column(Integer, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
