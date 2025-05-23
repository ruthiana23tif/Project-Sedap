import React from "react";

const dishes = [
  {
    name: "Nasi Goreng Spesial",
    portion: "1 Porsi",
    spiceLevel: "🌶️🌶️",
    calories: "520 kcal",
    price: 50000,
    image: "img/nasgor.jpg",
  },
  {
    name: "Grilled Tuna Sambal Matah",
    portion: "1 Porsi",
    spiceLevel: "🌶️🌶️🌶️",
    calories: "480 kcal",
    price: 85000,
    image: "img/grilled.jpg",
  },
  {
    name: "Sate Ayam Bumbu Kacang",
    portion: "10 Tusuk",
    spiceLevel: "🌶️",
    calories: "430 kcal",
    price: 40000,
    image: "img/sate.jpg",
  },
  {
    name: "Ayam Geprek Mozarella",
    portion: "1 Porsi",
    spiceLevel: "🌶️🌶️🌶️🌶️",
    calories: "600 kcal",
    price: 55000,
    image: "img/ayamgeprek.jpg", 
  },
];

const DishGallery = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-jost font-bold text-center mb-8">
        Chef’s Specials 🍽️
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dishes.map((dish, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden group shadow-lg"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-2xl">
              <h3 className="font-semibold text-lg mb-1 font-jost">
                {dish.name}
              </h3>
              <div className="flex flex-wrap items-center text-sm text-gray-600 font-Muli gap-3 mb-2">
                <span>🍽 {dish.portion}</span>
                <span>{dish.spiceLevel} Level</span>
                <span>🔥 {dish.calories}</span>
              </div>
              <p className="text-[#00B074] font-bold text-base font-Muli">
                Rp {dish.price.toLocaleString("id-ID")}{" "}
                <span className="text-gray-500 font-normal">/ Porsi</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishGallery;
