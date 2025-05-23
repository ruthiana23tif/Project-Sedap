import { Link } from "react-router-dom";

export default function BestSeller() {
    const products = [
      {
        name: "Rendang Sapi",
        price: "Rp55,000",
        image: "/img/rendang.jpg",
      },
      {
        name: "Nasi Uduk",
        price: "Rp30,000",
        image: "/img/nasiuduk.jpg",
      },
      {
        name: "Nasi Goreng",
        price: "Rp20,000",
        image: "/img/nasigoreng.jpg",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Most Populer Food</h2>
          <p className="text-sm text-gray-600 mb-8">
            We cover a wide range of products
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-sm mb-4">{product.price}</p>
                <div className="flex justify-center gap-2">
                  <button className="text-xs border px-3 py-1 rounded hover:bg-gray-200">
                    Add to Cart
                  </button>
                  <button className="text-xs bg-black text-white px-3 py-1 rounded hover:bg-gray-800">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <Link to="/bestseller" className="mt-8 inline-block text-sm font-semibold hover:underline">
  See All
</Link>
        </div>
      </section>
    );
  }
  