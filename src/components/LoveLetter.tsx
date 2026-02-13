import { useState } from "react";

interface LoveLetterProps {
  onBack: () => void;
}

const LoveLetter = ({ onBack }: LoveLetterProps) => {
  const [isUnfolded, setIsUnfolded] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2 className="text-3xl text-primary font-bold">
        {isUnfolded ? "😶‍🌫️😶‍🌫️" : "Ada Pesan Nihh!"}
      </h2>
      {!isUnfolded && (
        <p className="text-lg text-primary">
          Tekan tombol bagian bawah untuk menerima pesan
        </p>
      )}
      <div
        className={`transition-all duration-1000 ${
          isUnfolded ? "scale-100" : "scale-0"
        }`}
      >
        <div className="max-w-2xl p-8 bg-pink-50 rounded-lg shadow-lg">
          <h2 className="text-3xl text-primary font-bold mb-6">
            Hey kamu..
          </h2>
          <p className="text-lg leading-relaxed">
            Makasih, ya.
            Karena tanpa kamu sadari, udh bikin hari-hariku jadi lebih berwarna.
            Yang dulu terasa biasa aja, sekarang penuh cerita.
            Ada tawa, ada momen random, ada hal-hal kecil yang tiba-tiba jadi berarti.
            Aku mungkin nggak pandai ngomong yang sesuai kamu harapkan.
            Tapi jujur, kehadiranmu bikin semuanya terasa lebih ringan.
            Dan itu… lebih dari cukup buat aku tanpa kamu sadari.
          </p>
        </div>
      </div>
      {!isUnfolded ? (
        <button onClick={() => setIsUnfolded(true)} className="btn btn-primary font-bold text-white">
          Buka pesan
        </button>
      ) : (
        <button onClick={onBack} className="btn btn-primary font-bold text-white">
          Kembali
        </button>
      )}
    </div>
  );
};

export default LoveLetter;
