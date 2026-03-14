from pydantic import BaseModel, EmailStr
from typing import Optional

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class UserOut(BaseModel):
    id: str
    email: EmailStr
    username: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    full_name: str
    role: str
    department_id: Optional[int] = None
    batch_id: Optional[int] = None
    phone_number: Optional[str] = None
    avatar_url: Optional[str] = None
    gender: Optional[str] = None

    class Config:
        from_attributes = True
