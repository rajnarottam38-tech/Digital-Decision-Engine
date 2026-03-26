from fastapi import APIRouter
from ai_engine import process_query

router = APIRouter()

@router.post("/chat")
def chat(data: dict):
    return {"response": process_query(data)}