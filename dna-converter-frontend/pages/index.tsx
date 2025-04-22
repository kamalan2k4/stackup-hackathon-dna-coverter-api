import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import DNAForm from "../components/DNAForm";
import ResultSection from "../components/ResultSection";
import dynamic from "next/dynamic";

const DNAAnimation = dynamic(() => import("../components/DNAAnimation"), {
  ssr: false,
});

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [conversionStarted, setConversionStarted] = useState(false);

  // 1. Create a ref for the results container
  const resultsRef = useRef<HTMLDivElement>(null);

  // 2. Scroll into view whenever `result` changes
  useEffect(() => {
    if (result && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  return (
    <>
      <Head>
        <title>DNA Converter</title>
      </Head>
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <DNAAnimation />

        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
            Unlock the Secrets of DNA:
          </h1>
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-green-400">
            Convert, Analyze, and Visualize
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Enter any DNA sequence to instantly transcribe to RNA, break into codons,
            translate to amino acids, generate the reverse complement, and calculate
            GC content.
          </p>

          {!conversionStarted && (
            <button
              onClick={() => setConversionStarted(true)}
              className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition"
            >
              Start Conversion
            </button>
          )}

          {conversionStarted && (
            <div className="mt-10 space-y-8">
              <DNAForm onConvert={setResult} />
              {/* 3. Attach the ref to the container wrapping the results */}
              <div ref={resultsRef}>
                <ResultSection result={result} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
