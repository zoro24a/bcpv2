from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.connection import engine, Base
from app.models import (
    profiles, 
    students, 
    departments as department_models, 
    batches, 
    tutor_assignments, 
    requests, 
    request_history,
    templates
)
from app.routes import auth, students as student_routes, requests as request_routes, certificates as certificate_routes, admin, departments as department_routes, hods, tutors as tutor_routes, batches as batch_routes

# Initialize Database
Base.metadata.create_all(bind=engine)

app = FastAPI(title="BCP v2 API - Detailed Scaffold", version="2.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(student_routes.router, prefix="/students", tags=["Students"])
app.include_router(request_routes.router, prefix="/requests", tags=["Requests"])
app.include_router(certificate_routes.router, prefix="/certificates", tags=["Certificates"])
app.include_router(admin.router, prefix="/admin", tags=["Admin"])
app.include_router(department_routes.router, prefix="/departments", tags=["Departments"])
app.include_router(hods.router, prefix="/hods", tags=["HODs"])
app.include_router(tutor_routes.router, prefix="/tutors", tags=["Tutors"])
app.include_router(batch_routes.router, prefix="/batches", tags=["Batches"])

@app.get("/")
def welcome():
    return {"message": "BCP v2 Detailed Backend is Running"}
