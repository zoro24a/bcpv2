from sqlalchemy import Column, String, Integer, DateTime, func, ForeignKey
from app.database.connection import Base

class Batch(Base):
    __tablename__ = "batches"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    start_year = Column(Integer, nullable=False)
    end_year = Column(Integer, nullable=False)
    section = Column(String(10), nullable=True)
    created_at = Column(DateTime, server_default=func.now())
