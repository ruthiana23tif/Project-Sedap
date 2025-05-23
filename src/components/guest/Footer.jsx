import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import LogoTitle from "./LogoTitle";

const Footer = () => {
  return (
    <footer className="bg-[#95dba7] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <LogoTitle/>
          </div>
          <p className="text-base font-Muli text-[#3b3d50] mb-4 leading-relaxed">
            Sedap menawarkan berbagai pilihan makanan lezat dengan cita rasa terbaik. Kami berkomitmen untuk memberikan pengalaman kuliner yang tak terlupakan.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-[#3b3d50] p-2 rounded-full hover:bg-[#FF5A5F] transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#3b3d50] p-2 rounded-full hover:bg-[#FF5A5F] transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#3b3d50] p-2 rounded-full hover:bg-[#FF5A5F] transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#3b3d50] p-2 rounded-full hover:bg-[#FF5A5F] transition duration-300">
              <FaGooglePlusG />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold font-jost mb-4 text-[#FF5A5F]">Layanan Kami</h3>
          <ul className="space-y-2 font-Muli text-sm text-[#3b3d50]">
            <li>Makanan Lezat</li>
            <li>Area Parkir</li>
            <li>Wi-Fi Gratis</li>
            <li>Pesanan Online</li>
            <li>Pengiriman ke Rumah</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold font-jost mb-4 text-[#FF5A5F]">TAUTAN PENTING</h3>
          <ul className="space-y-2 font-Muli text-sm text-[#3b3d50]">
            <li>Tentang Kami</li>
            <li>Menu Kami</li>
            <li>Testimoni</li>
            <li>Hubungi Kami</li>
            <li>Panduan Pengguna</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold font-jost mb-4 text-[#FF5A5F]">KONTAK</h3>
          <ul className="space-y-3 text-sm font-Muli text-[#3b3d50]">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              Jl. Sedap No. 7<br />
              Jakarta, Indonesia
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +62 800 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <FaPaperPlane /> info@sedap.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t font-Muli border-[#3b3d50] text-center pt-6 text-sm text-[#3b3d50]">
        Copyright © 2025 Sedap. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
