from sqlalchemy import Column, String, Integer, Enum, ForeignKey, Text, DateTime, func, Table
from sqlalchemy.orm import relationship
from app.database.connection import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    role = Column(Enum('admin', 'hod', 'tutor', 'principal', 'office', 'student'), nullable=False)
    full_name = Column(String(255), nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=True)
    created_at = Column(DateTime, server_default=func.now())

    department = relationship("Department", primaryjoin="User.department_id == Department.id", back_populates="users")

class Department(Base):
    __tablename__ = "departments"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    code = Column(String(50), unique=True, nullable=False)
    hod_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, server_default=func.now())

    users = relationship("User", primaryjoin="User.department_id == Department.id", back_populates="department")
    hod = relationship("User", primaryjoin="Department.hod_id == User.id")

class Batch(Base):
    __tablename__ = "batches"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    start_year = Column(Integer, nullable=False)
    end_year = Column(Integer, nullable=False)
    section = Column(String(10), nullable=True)
    created_at = Column(DateTime, server_default=func.now())

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    register_number = Column(String(50), unique=True, nullable=False)
    parent_name = Column(String(255), nullable=True)
    gender = Column(Enum('Male', 'Female', 'Other'), nullable=True)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=True)
    created_at = Column(DateTime, server_default=func.now())

class Tutor(Base):
    __tablename__ = "tutors"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    created_at = Column(DateTime, server_default=func.now())

class TutorAssignment(Base):
    __tablename__ = "tutor_assignments"
    id = Column(Integer, primary_key=True, autoincrement=True)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=False)
    tutor_id = Column(Integer, ForeignKey("tutors.id"), nullable=False)
    semester = Column(Integer, nullable=False)
    academic_year = Column(String(20), nullable=False)
    created_at = Column(DateTime, server_default=func.now())

class Request(Base):
    __tablename__ = "requests"
    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    certificate_type = Column(String(255), nullable=False)
    reason = Column(Text, nullable=False)
    status = Column(Enum('pending_tutor', 'pending_hod', 'pending_principal', 'ready_for_issue', 'issued', 'returned'), default='pending_tutor')
    created_at = Column(DateTime, server_default=func.now())

class RequestHistory(Base):
    __tablename__ = "request_history"
    id = Column(Integer, primary_key=True, autoincrement=True)
    request_id = Column(Integer, ForeignKey("requests.id"), nullable=False)
    action = Column(Enum('submitted', 'approved_tutor', 'approved_hod', 'approved_principal', 'returned', 'issued'), nullable=False)
    action_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    remarks = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())

class Certificate(Base):
    __tablename__ = "certificates"
    id = Column(Integer, primary_key=True, autoincrement=True)
    request_id = Column(Integer, ForeignKey("requests.id"), unique=True, nullable=False)
    certificate_number = Column(String(100), unique=True, nullable=False)
    issued_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    issued_at = Column(DateTime, server_default=func.now())
    pdf_url = Column(String(255), nullable=True)

class Template(Base):
    __tablename__ = "templates"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    html_template = Column(Text, nullable=False)
    created_at = Column(DateTime, server_default=func.now())
