import gif from "../assets/gif/welcome3.gif";

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({ onNext }: WelcomeProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <img src={gif} alt="Welcome" className="w-1/2" />
      <h1 className="text-4xl text-primary font-bold">Alooo...!!</h1>
      <p className="text-lg max-w-2xl text-primary font-bold">
        Jangan salah paham dulu ya… Ini nggk ada apa-apa kok…
        Aku cuma… ya… iseng aja bikinnya.
        Kalau kamu mau lihat, ya buka ajaa…
        Tapi jangan berharap lebih.
        Lagian ini cuma cerita soal kemarin ama rekapan tahun lalu.
        Sama yaaa makasih buat tahun kemarin juga.
        Udh bikin penuh gelak tawa.
        Karena ada beberapa hal yang bikin senyum aja.

Udah, gitu doang kok. Jangan mikir aneh-aneh.
      </p>
      <button
        onClick={onNext}
        className="px-6 py-2 rounded-lg transition-all bg-primary font-bold text-white hover:bg-primary-focus"
      >
        Kalau Mau, Klik Aja…
      </button>
    </div>
  );
};

export default Welcome;
