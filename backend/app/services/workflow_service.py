from sqlalchemy.orm import Session
from app.models.requests import Request
from app.models.request_history import RequestHistory
from sqlalchemy import select

class WorkflowService:
    @staticmethod
    def transition_status(db: Session, request_id: int, action: str, actor_id: str, remarks: str = None):
        result = db.execute(select(Request).where(Request.id == request_id))
        req = result.scalars().first()
        if not req:
            return None
        
        # Status Mapping
        status_map = {
            "approved_tutor": "pending_hod",
            "approved_hod": "pending_principal",
            "approved_principal": "approved", # ready_for_issue -> approved
            "issued": "issued",
            "rejected": "rejected"
        }
        
        if action in status_map:
            req.status = status_map[action]
            
            # Record History
            history = RequestHistory(
                request_id=request_id,
                action=action,
                action_by=actor_id,
                remarks=remarks
            )
            db.add(history)
            db.commit()
            db.refresh(req)
            return req
        return None

    @staticmethod
    def approve_by_tutor(db: Session, request_id: int, actor_id: str, remarks: str = None):
        return WorkflowService.transition_status(db, request_id, "approved_tutor", actor_id, remarks)

    @staticmethod
    def approve_by_hod(db: Session, request_id: int, actor_id: str, remarks: str = None):
        return WorkflowService.transition_status(db, request_id, "approved_hod", actor_id, remarks)

    @staticmethod
    def approve_by_principal(db: Session, request_id: int, actor_id: str, remarks: str = None):
        return WorkflowService.transition_status(db, request_id, "approved_principal", actor_id, remarks)

    @staticmethod
    def return_request(db: Session, request_id: int, actor_id: str, remarks: str = None):
        return WorkflowService.transition_status(db, request_id, "rejected", actor_id, remarks) 
