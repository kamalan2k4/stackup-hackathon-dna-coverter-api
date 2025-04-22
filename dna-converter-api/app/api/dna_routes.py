from fastapi import APIRouter
from app.schemas.dna import DNARequest, DNAResponse
from app.services.dna_utils import *

router = APIRouter()

@router.post("/convert", response_model=DNAResponse)
def convert_dna(data: DNARequest):
    dna = data.sequence.upper()
    return {
        "rna": transcribe(dna),
        "codons": split_codons(transcribe(dna)),
        "amino_acids": translate(dna),
        "reverse_complement": reverse_complement(dna),
        "gc_content": gc_content(dna)
    }