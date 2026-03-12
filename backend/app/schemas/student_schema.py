from pydantic import BaseModel
from typing import Optional

class StudentBase(BaseModel):
    register_number: str
    parent_name: Optional[str]
    gender: Optional[str]
    batch_id: Optional[int]

class StudentCreate(StudentBase):
    user_id: int

class StudentOut(StudentBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
