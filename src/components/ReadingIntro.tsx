import tarot from "../assets/gif/tarot2.gif";

interface ReadingIntroProps {
  onNext: () => void;
}

const ReadingIntro = ({ onNext }: ReadingIntroProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <img src={tarot} alt="Tarot" className="w-1/2" />
      <h2 className="text-3xl text-primary font-bold">Jahil Dikiiit~</h2>
      <div className="text-lg max-w-2xl text-primary font-bold space-y-4">
        <p>
          Wkwkwk… sebenarnya mau pilih deck yang mana pun,
isinya tetap sama kok.
        </p>
        <p>
        Aku cuma ganti tampilan doang, biar keliatan ribet padahal nggak 😝.
        </p>
        <p className="text-xl mt-6">
          Tenang. Ceritanya tetep ada kok.
          ini cuma iseng biar kamu nggak bete.
          Udah. Jangan mikir macam-macam. Biasa aja.
        </p>
      </div>
      <button
        onClick={onNext}
        className="px-6 py-2 rounded-lg transition-all bg-primary font-bold text-white hover:bg-primary-focus"
      >
        Yaudah, Lanjut 😤
      </button>
    </div>
  );
};

export default ReadingIntro;
