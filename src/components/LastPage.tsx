import CuteHeart from "./CuteHeart";
const LastPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <h2 className="text-3xl font-bold text-primary">Bukan Apa-Apa, Tapi…</h2>
      <p className="text-lg max-w-2xl">
       Makasih ya udah ada sampai sekarang.
       Jgn mikir macam-macam ya.. cuma…
       rasanya hari-hari jadi lebih… ya, beda aja gtuu.
       Hari-hari biasa akhir-akhir ini malah lebih asik..
       mungkin… sedikit karena kamu juga.
       Tapi jangan salah paham dulu!
       Aku cuma ngomong faktanya aj kok.
      </p>
      <CuteHeart />
    </div>
  );
};

export default LastPage;
