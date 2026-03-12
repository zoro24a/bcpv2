from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, students, requests, certificates

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
app.include_router(students.router, prefix="/students", tags=["Students"])
app.include_router(requests.router, prefix="/requests", tags=["Requests"])
app.include_router(certificates.router, prefix="/certificates", tags=["Certificates"])

@app.get("/")
def welcome():
    return {"message": "BCP v2 Detailed Backend is Running"}
