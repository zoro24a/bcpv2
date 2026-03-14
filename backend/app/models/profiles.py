from sqlalchemy import Column, String, Integer, Enum, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.dialects.mysql import CHAR
import uuid
from app.database.connection import Base

class Profile(Base):
    __tablename__ = "profiles"
    
    id = Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    first_name = Column(String(255), nullable=True)
    last_name = Column(String(255), nullable=True)
    username = Column(String(255), unique=True, nullable=True)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=True) # Adding back password_hash as it was in user.py
    phone_number = Column(String(20), nullable=True)
    avatar_url = Column(String(255), nullable=True)
    gender = Column(String(20), nullable=True)
    
    role = Column(Enum('admin', 'student', 'tutor', 'hod', 'principal', 'office'), nullable=False)
    
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=True)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=True)
    
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    @hybrid_property
    def full_name(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        return self.first_name or self.last_name or self.username or "User"

    # Relationships will be defined here or in other models to avoid circular imports
    department = relationship("Department", foreign_keys=[department_id])
    batch = relationship("Batch", foreign_keys=[batch_id])
