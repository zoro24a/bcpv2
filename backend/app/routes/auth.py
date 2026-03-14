from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.database.connection import get_db
from app.models.profiles import Profile
from app.schemas.auth_schema import UserLogin, Token, UserOut
from app.auth.password_hash import verify_password
from app.auth.jwt_handler import create_access_token
from app.auth.role_middleware import get_current_user

router = APIRouter()

@router.post("/login", response_model=Token)
def login(credentials: UserLogin, db: Session = Depends(get_db)):
    result = db.execute(select(Profile).where(Profile.email == credentials.email))
    user = result.scalars().first()
    if not user or not verify_password(credentials.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    token = create_access_token(data={
        "user_id": str(user.id),
        "role": str(user.role.value) if hasattr(user.role, 'value') else str(user.role),
        "department_id": user.department_id
    })
    return {"access_token": token, "token_type": "bearer"}

@router.get("/me", response_model=UserOut)
def get_me(current_user: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    result = db.execute(select(Profile).where(Profile.id == current_user["user_id"]))
    user = result.scalars().first()
    return user
