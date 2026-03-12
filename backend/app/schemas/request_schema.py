from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class RequestBase(BaseModel):
    certificate_type: str
    reason: str

class RequestCreate(RequestBase):
    student_id: int

class RequestUpdate(BaseModel):
    action: str # approve_tutor, approve_hod, etc.
    remarks: Optional[str] = None

class RequestOut(RequestBase):
    id: int
    student_id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
