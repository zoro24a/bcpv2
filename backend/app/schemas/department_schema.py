from pydantic import BaseModel
from typing import Optional

class DepartmentBase(BaseModel):
    name: str
    established_year: Optional[int] = None

class DepartmentCreate(DepartmentBase):
    pass

class DepartmentOut(DepartmentBase):
    id: int

    class Config:
        from_attributes = True
