import { useState, useEffect } from "react";

interface PromisesPageProps {
  onNext: () => void;
}

const PromisesPage = ({ onNext }: PromisesPageProps) => {
  const [currentPromiseIndex, setCurrentPromiseIndex] = useState(0);
  const [typedPromise, setTypedPromise] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);

  const promises = [
    "Jujur aja, awalnya aku biasa aja, nggak terlalu ekspektasi tinggi",
    "Cuman kali ini beda bgt sihh",
    "Kerjanya super duper lebih mendingan daripada sebelumnya",
    "Yang dimana tempatnya tuh luas bgt jadi enak mau kesana kemari",
    "Truss juga disitu malah dkasi makan, itu pun bebas mau ngambil sebanyak apapun dan juga enak poll",
    "Lalu pas kita mau pulangan kukira bakal lama bgt kan kelarnya kek perlu closingan dlu, ehh malah cpat bgt",
  ];

  useEffect(() => {
    if (currentPromiseIndex < promises.length) {
      let currentCharIndex = 0;
      const currentPromise = promises[currentPromiseIndex];

      const typingInterval = setInterval(() => {
        if (currentCharIndex <= currentPromise.length) {
          setTypedPromise(currentPromise.slice(0, currentCharIndex));
          currentCharIndex++;
        } else {
          clearInterval(typingInterval);
          if (currentPromiseIndex === promises.length - 1) {
            setTimeout(() => setShowNextButton(true), 1000);
          }
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentPromiseIndex]);

  const handleClick = () => {
    if (currentPromiseIndex < promises.length - 1) {
      setCurrentPromiseIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full p-4"
      onClick={handleClick}
    >
      {/* <Flower /> */}
      <h1 className="text-3xl text-primary font-bold mb-12">
        Aku kerja di tempat baru
      </h1>

      <div className="w-full max-w-2xl">
        {promises.slice(0, currentPromiseIndex).map((promise, index) => (
          <div
            key={index}
            className="text-xl sm:text-2xl text-gray-400 mb-6 text-center"
          >
            {promise}
          </div>
        ))}

        <div className="text-xl sm:text-2xl text-primary font-medium text-center">
          {typedPromise}
        </div>
      </div>

      {showNextButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="btn btn-primary mt-12 animate-fade-in"
        >
          Terakhir..
        </button>
      )}

      {!showNextButton && currentPromiseIndex < promises.length && (
        <div className="text-sm text-gray-500 mt-12 animate-pulse">
          Tekan dimana saja
        </div>
      )}
    </div>
  );
};

export default PromisesPage;
