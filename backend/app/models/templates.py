from sqlalchemy import Column, String, Integer, DateTime, func, Text
from app.database.connection import Base

class Template(Base):
    __tablename__ = "templates"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    template_type = Column(String(50), nullable=True)
    file_url = Column(String(255), nullable=True)
    created_at = Column(DateTime, server_default=func.now())
