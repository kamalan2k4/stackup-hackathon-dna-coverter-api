from pydantic import BaseModel

class DNARequest(BaseModel):
    sequence: str

class DNAResponse(BaseModel):
    rna: str
    codons: list[str]
    amino_acids: list[str]
    reverse_complement: str
    gc_content: str