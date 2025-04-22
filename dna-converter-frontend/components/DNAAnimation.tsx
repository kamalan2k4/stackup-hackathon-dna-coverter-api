import Lottie from "lottie-react";
import dnaAnimation from "../public/dna.json";

export default function DNAAnimation() {
  return (
    <div className="hidden md:block fixed top-0 right-0 h-screen w-1/4 z-0 pointer-events-none">
      <Lottie
        animationData={dnaAnimation}
        loop
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
