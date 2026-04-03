from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import json, os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_FILE = "sessions.json"

def load_db():
    if not os.path.exists(DB_FILE):
        return {}
    with open(DB_FILE) as f:
        return json.load(f)

def save_db(data):
    with open(DB_FILE, "w") as f:
        json.dump(data, f, indent=2)

class Option(BaseModel):
    name: str
    cost: float
    growth: float
    risk: int
    time: float
    stability: float

class Session(BaseModel):
    session_id: str
    options: List[Option]

@app.post("/save")
def save_session(session: Session):
    db = load_db()
    db[session.session_id] = [o.dict() for o in session.options]
    save_db(db)
    return {"status": "saved", "session_id": session.session_id}

@app.get("/load/{session_id}")
def load_session(session_id: str):
    db = load_db()
    if session_id not in db:
        return {"error": "Session not found"}
    return {"session_id": session_id, "options": db[session_id]}

@app.get("/sessions")
def list_sessions():
    db = load_db()
    return {"sessions": list(db.keys())}

@app.delete("/session/{session_id}")
def delete_session(session_id: str):
    db = load_db()
    if session_id in db:
        del db[session_id]
        save_db(db)
    return {"status": "deleted"}
