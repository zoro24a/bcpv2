from sqlalchemy.ext.asyncio import AsyncSession
from app.models.request import Request, RequestHistory
from sqlalchemy import select

class WorkflowService:
    @staticmethod
    async def transition_status(db: AsyncSession, request_id: int, action: str, actor_id: int, remarks: str = None):
        result = await db.execute(select(Request).where(Request.id == request_id))
        req = result.scalars().first()
        if not req:
            return None
        
        # Status Mapping
        status_map = {
            "approved_tutor": "pending_hod",
            "approved_hod": "pending_principal",
            "approved_principal": "ready_for_issue",
            "issued": "issued",
            "returned": "returned"
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
            await db.commit()
            await db.refresh(req)
            return req
        return None

    @staticmethod
    async def approve_by_tutor(db: AsyncSession, request_id: int, actor_id: int, remarks: str = None):
        return await WorkflowService.transition_status(db, request_id, "approved_tutor", actor_id, remarks)

    @staticmethod
    async def approve_by_hod(db: AsyncSession, request_id: int, actor_id: int, remarks: str = None):
        return await WorkflowService.transition_status(db, request_id, "approved_hod", actor_id, remarks)

    @staticmethod
    async def approve_by_principal(db: AsyncSession, request_id: int, actor_id: int, remarks: str = None):
        return await WorkflowService.transition_status(db, request_id, "approved_principal", actor_id, remarks)

    @staticmethod
    async def return_request(db: AsyncSession, request_id: int, actor_id: int, remarks: str = None):
        return await WorkflowService.transition_status(db, request_id, "returned", actor_id, remarks)
