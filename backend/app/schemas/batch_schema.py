from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime

class BatchBase(BaseModel):
    name: str
    section: Optional[str] = None
    department_id: int
    student_count: Optional[int] = 0
    total_sections: Optional[int] = 1
    status: Optional[str] = "active"
    current_semester: Optional[int] = None
    semester_from_date: Optional[date] = None
    semester_to_date: Optional[date] = None

class BatchOut(BatchBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class TutorAssignmentRequest(BaseModel):
    batch_id: int
    tutor_id: str
    semester: int
