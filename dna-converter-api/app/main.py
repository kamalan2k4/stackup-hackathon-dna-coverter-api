from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import dna_routes

app = FastAPI(title="DNA Converter API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dna_routes.router, prefix="/api/dna", tags=["DNA Tools"])