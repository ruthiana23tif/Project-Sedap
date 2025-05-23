import React from "react";

const articles = [
  {
    title: "5 Menu Wajib Coba di Sedap yang Bikin Ketagihan",
    description:
      "Temukan menu-menu terbaik di Sedap yang akan membuat Anda ingin kembali lagi, dari nasi goreng hingga sate lezat!",
    image: "https://id.pinterest.com/pin/422281204604276/",
    link: "#",
  },
  {
    title: "Tips Memilih Makanan Sehat Saat Makan di Restoran",
    description:
      "Pilih menu yang tepat untuk menjaga kesehatan tanpa mengorbankan rasa enak di Sedap.",
    image: "https://i.ibb.co/6yyz6rp/img2.jpg",
    link: "#",
  },
  {
    title: "Kenapa Nasi Goreng Sedap Jadi Menu Favorit Semua Orang",
    description:
      "Nasi Goreng Sedap punya rahasia tersendiri. Ketahui kenapa menu ini jadi favorit di antara pengunjung!",
    image: "https://i.ibb.co/Wk1jjzS/img3.jpg",
    link: "#",
  },
];

const NewsCardSection = () => {
  return (
    <section className="bg-[#f5faff] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Berita Terbaru dari Sedap</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Temukan berita terbaru, tips kuliner, dan menu spesial dari Sedap yang pasti menggugah selera.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Gambar */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay blur gelap + teks muncul */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title bergerak ke atas */}
              <div className="absolute bottom-6 left-6 right-6 z-10 transition-all duration-500 group-hover:-translate-y-28">
                <h3 className="text-white text-lg font-semibold transition-colors duration-300 group-hover:text-[#00B074]">
                  {item.title}
                </h3>
              </div>

              {/* Deskripsi muncul di bawah title pas hover */}
              <div className="absolute bottom-16 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <p className="text-white text-sm">{item.description}</p>
              </div>

              {/* Read More tetap di bawah */}
              <div className="absolute bottom-4 left-6 z-10">
                <span className="text-sm text-pink-300">Read More..</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCardSection;
