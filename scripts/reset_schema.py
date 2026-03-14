import sys
import os
from sqlalchemy import text
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))
from app.database.connection import engine, Base
from app.models import profiles, students, departments, batches, requests, templates, request_history, tutor_assignments

def reset_schema():
    print("Resetting database schema...")
    with engine.connect() as conn:
        conn.execute(text("SET FOREIGN_KEY_CHECKS = 0;"))
        
        # Get all tables
        result = conn.execute(text("SHOW TABLES;"))
        tables = [row[0] for row in result]
        
        for table in tables:
            print(f"Dropping table: {table}")
            conn.execute(text(f"DROP TABLE IF EXISTS `{table}`;"))
            
        conn.execute(text("SET FOREIGN_KEY_CHECKS = 1;"))
        conn.commit()
    
    print("Re-creating all tables...")
    Base.metadata.create_all(bind=engine)
    print("Schema reset successful.")

if __name__ == "__main__":
    reset_schema()
