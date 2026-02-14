interface FinalRevealProps {
  onNext: () => void;
}

const FinalReveal = ({ onNext }: FinalRevealProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <h2 className="text-3xl text-primary font-bold">Cerita Baru</h2>
      <p className="text-lg max-w-2xl">
     Oke, sekarang cerita untuk kemarin yang sempat aku skip hehe. Sebenarnya akhir-akhir ini banyak banget sih aku jalan-jalan. Dimulai dari nyoba climbing, main sama ikan koi, dan main roleplay jadi ras orang-orang fantasi gitu. Seru banget deh pokoknya wkwk.
Lalu, dari semua kegiatan asik itu, tiba-tiba nih aku dapat panggilan dari HRD Big Mall, disuruh kerja lagi jadi waiters. Nah, di situ aku bimbang tuh, mau nerima apa nggak. Takutnya ketabrak sama jadwal sempro. Tapi karena tanggal kerjanya pas tanggal merah, dari 14–17 Februari, yaudah tuh aku ambil ;v
Nah, di situ kan posisinya masih rambut panjang ya. Kalau kerja dengan tampilan bgitu, udah pasti disuruh potong, ya kan? Yaudah tuh aku potong rambut cuma buat rapi aja. Terus, pas aku mampir ke rumah sebelah, mamakku kaget dengan penampilanku yang tiba-tiba potong rambut wkwkw. Di situ katanya, “Tumben kamu potong? Katanya mau gondrong?” wkwkwk.
      </p>
      <button onClick={onNext} className="btn btn-primary font-bold text-white mt-8">
        Truss jugaa...
      </button>
    </div>
  );
};

export default FinalReveal;
