from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class ProfileBase(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: EmailStr
    phone_number: Optional[str] = None
    gender: Optional[str] = None
    department_id: Optional[int] = None

class ProfileCreate(ProfileBase):
    password: str
    role: str

class ProfileUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone_number: Optional[str] = None
    avatar_url: Optional[str] = None
    gender: Optional[str] = None

class ProfileOut(ProfileBase):
    id: str
    role: str
    created_at: datetime

    class Config:
        from_attributes = True
