import {
  FaUtensils,
  FaMotorcycle,
  FaClock,
  FaConciergeBell,
  FaLeaf,
  FaWifi,
  FaMugHot,
  FaEllipsisH,
} from "react-icons/fa";

const facilities = [
  { icon: <FaUtensils size={32} />, label: "Menu Nusantara" },
  { icon: <FaMotorcycle size={32} />, label: "Layanan Antar" },
  { icon: <FaClock size={32} />, label: "Buka 24 Jam" },
  { icon: <FaConciergeBell size={32} />, label: "Pelayanan Ramah" },
  { icon: <FaLeaf size={32} />, label: "Bahan Segar" },
  { icon: <FaWifi size={32} />, label: "Free Wifi" },
  { icon: <FaMugHot size={32} />, label: "Minuman Hangat" },
  { icon: <FaEllipsisH size={32} />, label: "Lainnya" },
];

export default function FacilitiesSection() {
  return (
    <section className="bg-[#f3f9ff] py-16 px-6 rounded-2xl">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="font-jost text-[30px] font-bold text-gray-800 mb-4">
            {" "}
            We are Providing You <br /> Our Best Facilities
          </h2>
          <p className="text-gray-600 font-Muli text-base mb-6 max-w-md mx-auto lg:mx-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-Muli text-sm py-2 px-6 rounded-md transition">
            Discover More
          </button>
        </div>

        {/* Right Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-px border border-gray-200 bg-gray-200 rounded-lg overflow-hidden">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center text-center p-6"
            >
              <div className="text-blue-600 mb-2">{facility.icon}</div>
              <p className="text-gray-700 font-Muli text-[15px]">
                {facility.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
