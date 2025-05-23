import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"; 
import { BsShieldCheck } from "react-icons/bs"; 
import { RiWallet3Line } from "react-icons/ri"; 

export default function FaetureInfo() {
  return (
    <div className=" p-6 rounded-xl  flex flex-wrap gap-4 items-center justify-between max-w-6xl mx-auto">
      {/* Tanggal Check-in */}
      <div className="flex items-center font-Muli gap-2 border-b border-gray-300 pb-1">
        <span className="text-gray-500 text-xl">📅</span>
        <span className="text-black">05/08/2025</span>
      </div>

      {/* Tanggal Check-out */}
      <div className="flex items-center font-Muli  gap-2 border-b border-gray-300 pb-1">
        <span className="text-gray-500 text-xl">📅</span>
        <span className="text-black">05/14/2025</span>
      </div>

      {/* Info Orang & Kamar */}
      <div className="flex items-center gap-2 font-Muli border-b border-gray-300 pb-1 text-gray-600">
        <span className="text-gray-500 text-xl">👤</span>
        <span>
          1 Adults &bull; 1 Children &bull; 1 Table
        </span>
      </div>

      {/* Tombol */}
      <button className="px-6 py-2 rounded-full font-Muli border border-gray-300 hover:bg-gray-100 transition text-sm">
        Check Availability
      </button>
    </div>
  );
}
