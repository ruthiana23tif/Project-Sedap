import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-[#f5faff] py-20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-jost font-bold text-[#00B074]">
          Subscribe &amp; Get Special Discount on Your Next Meal!
        </h2>
        <p className="text-gray-600 mt-4 font-Muli leading-relaxed">
          Don’t miss out on the latest dishes and exclusive deals! Subscribe now and get
          <br />
          special discounts and a monthly update on our menu and promotions.
        </p>

        {/* Form */}
        <form className="mt-10 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-full overflow-hidden flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="px-6 py-4 w-full font-Muli text-sm outline-none text-gray-700 placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-[#074b07] text-white font-Muli text-sm font-semibold px-6 py-4 hover:bg-[rgba(27,56,27,0.42)] transition-all duration-300 rounded-full rounded-l-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
