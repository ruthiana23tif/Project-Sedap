// components/MostPopularDestination.jsx
import React from "react";

const FavFood = () => {
  const destinations = [
    {
      location: "Jakarta, Indonesia",
      title: "Nasi Goreng Spesial Ala Chef",
      price: "Rp 50.000 Per Porsi",
      rating: 4.8,
      image:"img/nasgor.jpg",
      large: true,
    },
    {
      location: "Jakarta, Indonesia",
      title: "Nasi Goreng Kampung Spesial",
      price: "Rp 50.000 Per Porsi",
      rating: 4.8,
      image: "img/nasgor.jpg",
    },
    {
      location: "Bali, Indonesia",
      title: "Grilled Tuna Sambal Matah",
      price: "Rp 85.000 Per Porsi",
      rating: 4.7,
      image: "img/grilled.jpg",
    },
    {
      location: "Bandung, Indonesia",
      title: "Sate Ayam Bumbu Kacang",
      price: "Rp 40.000 Per Porsi",
      rating: 4.6,
      image: "img/sate.jpg",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[32px] sm:text-4xl font-jost font-bold text-gray-800">
          Signature Dishes You Must Try
        </h2>
        <button className="border border-[#00B074] text-[#00B074] px-4 py-2 rounded-full hover:bg-[#00B074] hover:text-white transition font-Muli">
          View All
        </button>
      </div>

      <p className="text-gray-500 font-Muli text-[18px] mb-8 max-w-xl">
        From classic favorites to bold new flavors, our most popular dishes are
        a celebration of taste you won’t forget.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Feature Dish */}
        <div className="md:col-span-1 group overflow-hidden rounded-2xl relative shadow-lg">
          <img
            src={destinations[0].image}
            alt={destinations[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-white bg-black/60 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-sm">{destinations[0].location}</p>
            <h3 className="text-xl font-semibold">{destinations[0].title}</h3>
            <p className="font-Muli">{destinations[0].price}</p>
            <p>
              <span className="text-yellow-400">★★★★☆</span>{" "}
              {destinations[0].rating}
            </p>
          </div>
        </div>

        {/* Smaller Dishes */}
        <div className="md:col-span-2 grid grid-cols-1 gap-4">
          {destinations.slice(1).map((dish, i) => (
            <div
              key={i}
              className="flex items-center bg-white rounded-2xl shadow p-4 gap-4 group hover:shadow-lg transition"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-40 h-28 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div>
                <p className="text-sm text-[#00B074] font-Muli">
                  {dish.location}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 font-jost">
                  {dish.title}
                </h3>
                <p className="font-Muli">{dish.price}</p>
                <p>
                  <span className="text-yellow-500">★★★★☆</span>{" "}
                  {dish.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavFood;
