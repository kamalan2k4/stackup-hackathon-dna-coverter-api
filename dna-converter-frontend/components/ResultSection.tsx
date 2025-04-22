export default function ResultSection({ result }: { result: any }) {
    if (!result) return null;
  
    return (
      <div className="mt-8 p-4 bg-[#1e293b] rounded-md space-y-2">
        <div><strong>RNA:</strong> {result.rna}</div>
        <div><strong>Codons:</strong> {result.codons.join(" ")}</div>
        <div><strong>Amino Acids:</strong> {result.amino_acids.join(" - ")}</div>
        <div><strong>Reverse Complement:</strong> {result.reverse_complement}</div>
        <div><strong>GC Content:</strong> {result.gc_content}%</div>
      </div>
    );
  }
  