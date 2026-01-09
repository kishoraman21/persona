from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from chat import getResponse

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_headers=["*"],
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
)


class ChatReq(BaseModel):
    message: str


@app.post("/chat")
async def chat(input: ChatReq):
    return getResponse(input.message)
