from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.database.connection import get_db
from app.models.user import User
from app.schemas.auth_schema import UserLogin, Token, UserOut
from app.auth.password_hash import verify_password
from app.auth.jwt_handler import create_access_token
from app.auth.role_middleware import get_current_user

router = APIRouter()

@router.post("/login", response_model=Token)
async def login(credentials: UserLogin, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.email == credentials.email))
    user = result.scalars().first()
    if not user or not verify_password(credentials.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    token = create_access_token(data={
        "user_id": user.id,
        "role": user.role,
        "department_id": user.department_id
    })
    return {"access_token": token, "token_type": "bearer"}

@router.get("/me", response_model=UserOut)
async def get_me(current_user: dict = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.id == current_user["user_id"]))
    user = result.scalars().first()
    return user
