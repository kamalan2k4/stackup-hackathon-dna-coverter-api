
import { useState } from "react";
import axios from "axios";

interface Props {
  onConvert: (data: any) => void;
}

export default function DNAForm({ onConvert }: Props) {
  const [sequence, setSequence] = useState("");

  const handleConvert = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/dna/convert", { sequence });
      onConvert(res.data);
    } catch (err) {
      alert("Conversion failed");
    }
  };

  return (
    <div className="mt-6">
      <textarea
        value={sequence}
        onChange={(e) => setSequence(e.target.value)}
        placeholder="Enter DNA Sequence"
        className="w-full p-4 bg-[#1e293b] rounded-md text-white"
        rows={4}
      />
      <div className="mt-4 flex gap-4">
        <button onClick={handleConvert} className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">Convert</button>
        <button onClick={() => setSequence("")} className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">Clear</button>
      </div>
    </div>
  );
}
