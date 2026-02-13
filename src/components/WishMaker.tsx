import { useState, useEffect } from "react";

interface WishMakerProps {
  onBack: () => void;
}

const WishMaker = ({ onBack }: WishMakerProps) => {
  const [showWishes, setShowWishes] = useState(false);
  const [visibleWishes, setVisibleWishes] = useState<number>(0);

  const wishes = [
    "Aku harap kamu selalu sehat dan kuat. Jangan sampai sakit yaa, jgn bandel",
    "Aku harap jalan yang kamu pilih selalu dipermudah, pelan-pelan nggk papa kok",
    "Aku harap kamu nggak lupa untuk tidur, boongnya dah bnyak bgt inihh wkwkwk",
    "Semoga kamu selalu nemuin hal kecil yang bikin senyum, walau dikit",
    "Aku harap kamu tetep jadi kamu. Nggak usah berubah aneh-aneh, tapi kalo itu bikin kamu jadi lebih baik gapapa",
    "Aku harap hari-hari yang kamu jalani lebih ringan dari yang kamu bayangkan",
    "Jangan kebiasaan nyimpen masalah sendirian. Nyebelin tau",
    "Jangan kebiasaan mikir aneh-aneh. Fokus jalanin aja",
    "Makan yang bener. Jangan asal-asalan. Tubuhmu bukan mainan",
    "Semoga kamu selalu kuat. Tapi ingat, istirahat juga perlu",
    "Berhenti ngeremehin diri sendiri. Aku nggak milih orang sembarangan",
    "Kamu boleh nggak percaya sama dirimu, tapi jangan larang aku buat percaya sama kamu",
    "Kalau kamu ngerasa biasa aja, ya biar aku aja yang ngerasa kamu lebih.",
    "Kamu nggak perlu bandingin diri sama siapa pun. Capek tau",
    "Jangan ngeyel. Sesekali dengerin orang lain juga",
    "Kalau lagi sedih, ya… nggak apa-apa. Tapi jangan kelamaan",
    "Pokoknya… jaga diri. Udah, jangan dibantah.",
  ];

  useEffect(() => {
    if (showWishes && visibleWishes < wishes.length) {
      const timer = setTimeout(() => {
        setVisibleWishes((prev) => prev + 1);
      }, 500); // Adjust timing as needed (500ms = 0.5s)

      return () => clearTimeout(timer);
    }
  }, [showWishes, visibleWishes, wishes.length]);

  const allWishesLoaded = visibleWishes === wishes.length;

  if (allWishesLoaded) {
  }

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2 className="text-3xl text-primary font-bold">Harapan ku</h2>
      <div className="w-full max-w-4xl h-[60vh] overflow-y-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {showWishes &&
            wishes.slice(0, visibleWishes).map((wish, index) => (
              <div
                key={index}
                className="p-4 bg-primary bg-opacity-10 rounded-lg animate-fade-in"
              >
                <p className="text-lg">✨ {wish}</p>
              </div>
            ))}
        </div>
      </div>
      {!showWishes ? (
        <button onClick={() => setShowWishes(true)} className="btn btn-primary font-bold text-white">
          Harapan 
        </button>
      ) : visibleWishes < wishes.length ? (
        <div className="text-primary">
          Loading wishes... {visibleWishes}/{wishes.length}
        </div>
      ) : (
        <button onClick={onBack} className="btn btn-primary font-bold text-white">
          Kembali
        </button>
      )}
    </div>
  );
};

export default WishMaker;
