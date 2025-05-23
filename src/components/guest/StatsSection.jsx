export default function StatsSection() {
  const stats = [
    { value: "302+", label: "Menu Variatif" },
    { value: "25", label: "Cabang Restoran" },
    { value: "510+", label: "Makanan Terjual" },
    { value: "65", label: "Kota Terjangkau" },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center text-center gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:px-4 relative"
          >
            <h3 className="text-4xl font-Helvetica text-gray-800">{item.value}</h3>
            <p className="text-gray-600 font-Muli mt-1">{item.label}</p>

            {/* Divider */}
            {index !== stats.length - 1 && (
              <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
