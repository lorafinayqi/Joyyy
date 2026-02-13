import { useState } from "react";

interface DeckSelectorProps {
  onSelect: (backgroundImage: string) => void;
  decks: string[];
}

const DeckSelector = ({ onSelect, decks }: DeckSelectorProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const handleContinue = () => {
    if (selectedCard !== null) {
      onSelect(decks[selectedCard]);
    }
  };

  // Rotasi khusus 3 kartu (simetris & center)
  const rotations = [-15, 0, 15];

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 p-6 text-center">
      <h2 className="text-3xl text-primary font-bold">
        Yaudah, Pilih Satu!
      </h2>

      <p className="text-lg max-w-2xl text-primary font-semibold leading-relaxed px-4">
 Aku udah siapin beberapa deck kartu yang isinya menentukan cerita yang kamu baca. Jadi jangan salah pilih ya… aku nggak tanggung jawab kalau kamu nyesel 🦍.
      </p>

      {/* CARD CONTAINER */}
      <div className="relative h-[420px] w-[420px] flex items-center justify-center">
        {decks.slice(0, 3).map((deck, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="absolute w-48 h-72 transition-all duration-500 cursor-pointer"
            style={{
              transform:
                selectedCard === index
                  ? "translateY(-40px) scale(1.1)"
                  : `rotate(${rotations[index]}deg)`,
              transformOrigin: "bottom center",
              zIndex: selectedCard === index ? 30 : 10 + index,
            }}
          >
            <div
              className="w-full h-full rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{
                backgroundImage: `url(${deck})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button
        onClick={handleContinue}
        disabled={selectedCard === null}
        className={`px-6 py-2 rounded-lg transition-all mt-8 font-bold text-white
          ${
            selectedCard === null
              ? "bg-neutral-content text-content cursor-not-allowed"
              : "bg-primary text-primary-content cursor-pointer hover:bg-primary-focus"
          }`}
      >
        Bukaa
      </button>
    </div>
  );
};

export default DeckSelector;