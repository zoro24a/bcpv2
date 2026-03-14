from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Specified Connection String for Sync (PyMySQL)
DATABASE_URL = "mysql+pymysql://root:root123@localhost:3306/bcp_db"

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
