import sys
import os
from sqlalchemy.orm import Session
from sqlalchemy import text

# Add the backend directory to sys.path to import app modules
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from app.database.connection import engine, SessionLocal

def verify_database():
    with SessionLocal() as session:
        print("Verifying database state...")
        
        # Adjust table names based on actual schema
        schema_tables = {
            "students": "students",
            "requests": "requests",
            "departments": "departments",
            "tutors": "tutors",
            "certificate_templates": "templates",
            "issued_certificates": "certificates"
        }
        
        for name, table in schema_tables.items():
            result = session.execute(text(f"SELECT COUNT(*) FROM {table}"))
            count = result.scalar()
            print(f"Table {table} ({name}): {count} records")
        
        # Verify users
        result = session.execute(text("SELECT email, role, full_name FROM users"))
        users = result.fetchall()
        print(f"\nUsers in database ({len(users)}):")
        for user in users:
            print(f"- {user.full_name} ({user.email}): {user.role}")
        
        expected_emails = {"admin@gmail.com", "principal@gmail.com", "office@gmail.com"}
        found_emails = {user.email for user in users}
        
        if expected_emails == found_emails and len(users) == 3:
            print("\nVerification SUCCESS: Database is clean and system users are correctly seeded.")
        else:
            print("\nVerification FAILURE: User count or emails do not match requirements.")

def main():
    try:
        verify_database()
    except Exception as e:
        print(f"An error occurred during verification: {e}")
    finally:
        engine.dispose()

if __name__ == "__main__":
    main()
