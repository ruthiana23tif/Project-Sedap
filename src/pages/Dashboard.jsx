import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../components/Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'products', 'company', 'explore'
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo width={140} />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700" ref={dropdownRef}>
          <Link to="/" className="hover:text-black">Home</Link>

          {/* Products */}
          <div className="relative">
            <button onClick={() => toggleDropdown("products")} className="flex items-center hover:underline">
              Products
              <svg className={`ml-1 w-4 h-4 transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "products" && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black/10 z-50">
                <Link to="/skincare" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAll}>Skincare</Link>
                <Link to="/makeup" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAll}>Make Up</Link>
              </div>
            )}
          </div>

          {/* Company Info */}
          <div className="relative">
            <button onClick={() => toggleDropdown("company")} className="flex items-center hover:underline">
              Company Info
              <svg className={`ml-1 w-4 h-4 transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "company" && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black/10 z-50">
                <Link to="/media" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAll}>Katalog Media</Link>
                <Link to="/career" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAll}>Career Page</Link>
              </div>
            )}
          </div>

          <Link to="/testimoni" className="hover:text-black">Testimoni</Link>
          <Link to="/team" className="hover:text-black">Team</Link>
          <Link to="/faq" className="hover:text-black">FAQ Page</Link>

          {/* Explore */}
          <div className="relative">
            <button onClick={() => toggleDropdown("explore")} className="flex items-center hover:underline">
              Explore
              <svg className={`ml-1 w-4 h-4 transition-transform ${openDropdown === "explore" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "explore" && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black/10 z-50">
                <Link to="/aboutus" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAll}>About Us</Link>
                <Link to="/contactus" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAll}>Contact Us</Link>
                <Link to="/article" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAll}>Artikel</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-lg text-gray-800">
          <FaSearch className="cursor-pointer hover:text-black" />
          <Link to="/booking" className="hover:text-black">
            <FaShoppingCart className="cursor-pointer" />
          </Link>
          {/* Hamburger */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-2 text-sm text-gray-700 font-medium">
          <Link to="/" onClick={closeAll} className="block py-2">Home</Link>
          <Link to="/skincare" onClick={closeAll} className="block py-2">Skincare</Link>
          <Link to="/makeup" onClick={closeAll} className="block py-2">Make Up</Link>
          <Link to="/media" onClick={closeAll} className="block py-2">Katalog Media</Link>
          <Link to="/career" onClick={closeAll} className="block py-2">Career Page</Link>
          <Link to="/testimoni" onClick={closeAll} className="block py-2">Testimoni</Link>
          <Link to="/team" onClick={closeAll} className="block py-2">Team</Link>
          <Link to="/faq" onClick={closeAll} className="block py-2">FAQ Page</Link>
          <Link to="/aboutus" onClick={closeAll} className="block py-2">About Us</Link>
          <Link to="/contactus" onClick={closeAll} className="block py-2">Contact Us</Link>
          <Link to="/article" onClick={closeAll} className="block py-2">Artikel</Link>
        </div>
      )}
    </header>
  );
}
