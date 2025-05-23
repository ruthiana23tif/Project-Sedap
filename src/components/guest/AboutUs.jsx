export default function AboutUs() {
  return (
    <section className=" py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-md overflow-hidden">
        
        <div className="lg:w-1/2 w-full">
          <img
            src="/img/resto.jpg"
            alt="About Us"
            className="w-full max-h-[500px] object-cover"
          />
        </div>

        <div className="lg:w-1/2 w-full p-10">
          <h4 className="text-green-500 uppercase tracking-widest font-jost mb-2 text-[20px]">
            About Us
          </h4>
          <h2 className="text-4xl font-jost text-[30px] text-gray-900 mb-4">
            Temukan Cita Rasa Nusantara Bersama SEDAP
          </h2>
          <p className="text-gray-600 font-Muli text-base mb-6 leading-relaxed">
            SEDAP menghadirkan beragam pilihan makanan lezat khas Indonesia,
            dari jajanan tradisional hingga masakan rumahan favorit. Kami
            berkomitmen untuk menyajikan hidangan yang tidak hanya enak, tapi
            juga dibuat dengan bahan segar dan berkualitas.
          </p>
          <p className="text-gray-600 font-Muli text-base mb-6 leading-relaxed">
            Cocok untuk segala suasana — makan siang, arisan, hingga bekal
            keluarga. Rasakan kenikmatan cita rasa lokal yang otentik bersama
            SEDAP!
          </p>
          <button className="bg-green-500 text-white font-Muli text-[14px] px-6 py-3 rounded-md hover:bg-red-600 transition">
            Jelajahi Menu
          </button>
        </div>
      </div>
    </section>
  );
}
