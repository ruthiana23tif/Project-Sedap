import { FaShoppingCart } from "react-icons/fa";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import LogoTitle from "./LogoTitle";

export default function Navbar() {
  return (
    <div id="header-container" className="flex justify-between items-center p-4">

      <LogoTitle />

      <div
        id="nav-container"
        className="flex items-center space-x-6 pl-4 text-sm text-gray-700 font-medium"
      >
        <span id="nav-link">
          <a href="#" className="hover:text-[#FF5A5F] text-base transition-colors duration-300">
            Home
          </a>
        </span>
        <span id="nav-link">
          <a href="#" className="hover:text-[#FF5A5F] text-base transition-colors duration-300">
            Products
          </a>
        </span>
        <span id="nav-link">
          <a href="#" className="hover:text-[#FF5A5F] text-base transition-colors duration-300">
            About Us
          </a>
        </span>
        <span id="nav-link">
          <a href="#" className="hover:text-[#FF5A5F] text-base transition-colors duration-300">
            Contact Us
          </a>
        </span>
      </div>

 
      <div className="flex items-center space-x-6 text-gray-800 text-lg mr-7">
        <FaSearch className="cursor-pointer hover:text-[#FF5A5F] transition-all duration-300" />
        <FaShoppingCart className="cursor-pointer hover:text-[#FF5A5F] transition-all duration-300" />

        {/* Login/Register Buttons */}
        <a
          href="/login"
          className="text-sm text-gray-700 hover:text-[#FF5A5F] transition-colors duration-300"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-4 py-1 rounded-full bg-[#FF5A5F] text-white text-sm hover:bg-[#e14b4f] transition duration-300"
        >
          Register
        </a>
      </div>
    </div>
  );
}
