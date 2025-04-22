from app.core.codon_table import CODON_TABLE

def transcribe(dna):
    return dna.replace("T", "U")

def split_codons(rna):
    return [rna[i:i+3] for i in range(0, len(rna), 3)]

def translate(dna):
    rna = transcribe(dna)
    codons = split_codons(rna)
    amino_acids = []
    for codon in codons:
        aa = CODON_TABLE.get(codon, "Unknown")
        if aa == "Stop":
            break
        amino_acids.append(aa)
    return amino_acids

def reverse_complement(dna):
    comp = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
    return ''.join(comp.get(base, base) for base in reversed(dna))

def gc_content(dna):
    gc = sum(1 for base in dna if base in ['G', 'C'])
    return f"{(gc / len(dna) * 100):.2f}%"