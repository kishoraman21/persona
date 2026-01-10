from google import genai
from dotenv import load_dotenv
from systemPrompts import getPrompts
from google.genai import types

load_dotenv()
client = genai.Client()


def getResponse(message: str):
    SYSTEM_PROMPT = getPrompts()

    chat_msg = [
        {"role": "model", "parts": [{"text": SYSTEM_PROMPT}]},
        {"role": "user", "parts": [{"text": message}]},
    ]

    response = client.models.generate_content_stream(
        model="gemini-2.5-flash-lite",
        contents=chat_msg,
        # config=types.GenerateContentConfig(
        #     max_output_tokens=500,
        # ),
    )

    full_response = ""
    for chunk in response:
        if chunk.text:
            full_response += chunk.text

    print("Response:", full_response)
    return full_response
