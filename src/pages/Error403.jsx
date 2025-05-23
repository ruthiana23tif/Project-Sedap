import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'; // Ikon panah kiri

export default function Error403() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Kontainer Utama untuk Error */}
      <div className=" p-12 rounded-lg  flex flex-col md:flex-row items-center max-w-7xl w-full space-y-6 md:space-y-0 md:space-x-10">
        {/* Kolom Kiri: Konten Error */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-bold text-gray-800">Oops....</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">403 - Forbidden</h2>
          <p className="text-gray-500 mt-4">
            You don't have permission to view this page. Please contact the admin for access.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft className="inline-block mr-2" /> Back to Home
          </Link>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="w-72 h-auto md:w-96 mt-6 md:mt-0">
          <img src="/img/error.png" alt="403 error" className="w-full h-auto rounded-lg " />
        </div>
      </div>
    </div>
  );
}
