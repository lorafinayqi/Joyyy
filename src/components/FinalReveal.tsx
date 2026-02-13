interface FinalRevealProps {
  onNext: () => void;
}

const FinalReveal = ({ onNext }: FinalRevealProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <h2 className="text-3xl text-primary font-bold">Cerita Baru</h2>
      <p className="text-lg max-w-2xl">
        Oke sekarang adalah cerita untuk kemaren yang 
        sempat tertunda hehe. Sebenarnya akhir akhir ini banyak bgt sih ak jalan-jalan 
        dimulai dari nyoba climbing, main ama ikan koi dan main roleplay 
        lalu juga plotwistnya ak potong rambut waktu itu makanya pengen liatin cuman nanti aja wkwkwk 
        yang dimana aku lakukan secara tiba-tiba ampe mamak ku kaget liat 
        tampilan ku pas mampir ke rumah sebelah wkwwk. 
        Jadi kenapa ak potong rambut itu karena ak dipanggil lagi buat kerja jadi waitress 
        cuman nggk lama sih soalnya mw fokus sempro ak wkwkwk takutnya keganggu.
      </p>
      <button onClick={onNext} className="btn btn-primary font-bold text-white mt-8">
        Truss jugaa...
      </button>
    </div>
  );
};

export default FinalReveal;
