import { useState } from "react";
import { FaCrown, FaMedal, FaStar, FaTimesCircle } from "react-icons/fa";
import members from "../data/guest/members.json";

export default function CheckAnggota() {
  const [email, setEmail] = useState("");
  const [member, setMember] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const trimmedEmail = email.trim();

    // Validasi email kosong
    if (!trimmedEmail) {
      setError("Silahkan masukkan alamat email yang valid (tidak boleh kosong).");
      setMember(null);
      setSubmitted(true);
      return;
    }

    const found = members.find(
      (m) => m.email.toLowerCase() === trimmedEmail.toLowerCase()
    );
    setMember(found || null);
    setError(""); // reset error jika email valid
    setSubmitted(true);
  };

  const getMemberStyle = (loyalty) => {
    switch (loyalty) {
      case "Gold":
        return "bg-yellow-100 border-yellow-500 text-yellow-800";
      case "Silver":
        return "bg-gray-100 border-gray-500 text-gray-800";
      case "Bronze":
        return "bg-orange-100 border-orange-500 text-orange-800";
      default:
        return "";
    }
  };

  const getMemberIcon = (loyalty) => {
    switch (loyalty) {
      case "Gold":
        return <FaCrown className="inline mr-2 text-yellow-600" />;
      case "Silver":
        return <FaMedal className="inline mr-2 text-gray-600" />;
      case "Bronze":
        return <FaStar className="inline mr-2 text-orange-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Check Keanggotaan
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Masukkan alamat email yang terdaftar"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

        {submitted && (
          <div className="mt-4">
            {error ? (
              <div className="p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p className="font-semibold">{error}</p>
              </div>
            ) : member ? (
              <div
                className={`mt-4 p-3 border-l-4 rounded ${getMemberStyle(
                  member.loyalty
                )}`}
              >
                <p className="font-semibold flex items-center">
                  {getMemberIcon(member.loyalty)}
                  🧾 Selamat datang, {member.name}! Anda adalah member{" "}
                  <strong className="ml-1">{member.loyalty}</strong>.
                </p>
              </div>
            ) : (
              <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 flex items-center">
                <FaTimesCircle className="mr-2 text-red-600" />
                ❌ Email tidak terdaftar sebagai member.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
