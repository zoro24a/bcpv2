from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class StudentBase(BaseModel):
    register_number: str
    parent_name: Optional[str] = None
    batch_id: Optional[int] = None
    tutor_id: Optional[str] = None
    hod_id: Optional[str] = None

class StudentCreate(StudentBase):
    profile_id: str

class StudentEnrollRequest(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    gender: str
    register_number: str
    parent_name: Optional[str] = None
    department_id: Optional[int] = None
    batch_name: str
    section: Optional[str] = None

class StudentOut(StudentBase):
    id: int
    profile_id: str
    created_at: datetime

    class Config:
        from_attributes = True
