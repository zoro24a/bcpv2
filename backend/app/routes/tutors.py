from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from app.database.connection import get_db
from app.models.models import Tutor

router = APIRouter()

@router.get("/", response_model=List[dict])
async def get_tutors(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Tutor))
    return [{"id": t.id, "user_id": t.user_id} for t in result.scalars().all()]
