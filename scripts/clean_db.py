import sys
import os
from sqlalchemy import text
from sqlalchemy.orm import Session

# Add the backend directory to sys.path to import app modules
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from app.database.connection import engine, SessionLocal
from app.auth.password_hash import get_password_hash
from app.models import profiles, students, departments, batches, requests, templates, request_history, tutor_assignments

def clean_database():
    with SessionLocal() as session:
        print("Cleaning database...")
        
        # 1. Clear circular references
        # In new schema, profiles/departments might have FKs.
        # But we can just truncate or delete in order.
        session.execute(text("SET FOREIGN_KEY_CHECKS = 0;"))
        
        tables_to_clean = [
            "request_history",
            "requests",
            "tutor_assignments",
            "students",
            "batches",
            "templates",
            "departments",
            "profiles"
        ]
        
        for table in tables_to_clean:
            print(f"Cleaning table: {table}")
            session.execute(text(f"DELETE FROM {table}"))
        
        session.execute(text("SET FOREIGN_KEY_CHECKS = 1;"))
        session.commit()
        print("Database cleaned successfully.")

def seed_users():
    with SessionLocal() as session:
        print("Seeding system users...")
        
        password = "4567890"
        hashed_password = get_password_hash(password)
        
        users = [
            {"email": "admin@gmail.com", "first_name": "Admin", "last_name": "User", "username": "admin", "role": "admin"},
            {"email": "principal@gmail.com", "first_name": "Principal", "last_name": "User", "username": "principal", "role": "principal"},
            {"email": "office@gmail.com", "first_name": "Office", "last_name": "User", "username": "office", "role": "office"},
        ]
        
        for user_data in users:
            print(f"Adding user: {user_data['email']}")
            new_profile = profiles.Profile(
                email=user_data["email"],
                password_hash=hashed_password,
                role=user_data["role"],
                first_name=user_data["first_name"],
                last_name=user_data["last_name"],
                username=user_data["username"]
            )
            session.add(new_profile)
        
        session.commit()
        print("Users seeded successfully.")

def main():
    try:
        clean_database()
        seed_users()
        print("\nDatabase initialization complete.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
