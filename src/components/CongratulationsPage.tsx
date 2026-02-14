import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import gift from "../assets/gif/gifcho.gif"; // Add a gift gif to your assets

interface CongratulationsPageProps {
  onNext: () => void;
}

const CongratulationsPage = ({ onNext }: CongratulationsPageProps) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 relative">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={200}
        recycle={true}
      />

      <h1 className="text-4xl text-primary font-bold mb-8 text-center animate-fade-in">
        Yeyy!! Nih coklat virtual 🍫 makasih udah baca sampai sini wkwk 😆
      </h1>

      <img
        src={gift}
        alt="Gift"
        className="w-64 h-64 object-contain mb-8 animate-bounce"
      />

      <button onClick={onNext} className="btn btn-primary mt-8 animate-fade-in">
        The End ❤️
      </button>
    </div>
  );
};

export default CongratulationsPage;
