from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# Auth Schemas
class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    role: str
    department_id: Optional[int] = None

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

# Request Schemas
class RequestBase(BaseModel):
    certificate_type: str
    reason: str

class RequestCreate(RequestBase):
    student_id: int

class RequestUpdate(BaseModel):
    status: str
    remarks: Optional[str] = None

class RequestOut(RequestBase):
    id: int
    student_id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
