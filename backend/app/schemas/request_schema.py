from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class RequestBase(BaseModel):
    type: str
    sub_type: Optional[str] = None
    reason: str
    company_block: Optional[str] = None
    duration_block: Optional[str] = None

class RequestCreate(RequestBase):
    student_id: int # Still using student table PK (Integer)

class RequestUpdate(BaseModel):
    action: Optional[str] = None # approve_tutor, approve_hod, approve_principal, reject
    remarks: Optional[str] = None
    status: Optional[str] = None # Direct status update

class RequestOut(RequestBase):
    id: int
    student_id: int
    date: datetime
    status: str
    template_id: Optional[int] = None
    return_reason: Optional[str] = None
    pdf_url: Optional[str] = None
    certificate_number: Optional[str] = None
    issued_at: Optional[datetime] = None
    tutor_id: Optional[str] = None
    hod_id: Optional[str] = None
    batch_id: Optional[int] = None
    year: Optional[int] = None
    serial_number: Optional[int] = None
    created_at: datetime

    class Config:
        from_attributes = True
