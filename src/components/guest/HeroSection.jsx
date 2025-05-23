import React from "react";

const HeroSection = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
       
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-jost font-bold text-gray-900 leading-tight">
            Stay Once Carry
            <br />
            Memories Forever
          </h1>

          <p className="text-gray-600 font-Muli text-base mt-4 max-w-md mx-auto md:mx-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded font-Muli hover:bg-green-600 transition">
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
          <div className="w-[90%] h-auto overflow-hidden rounded-[200px_200px_0_0] shadow-lg">
            <img
              src="/img/resto.jpg"
              alt="Baju 1"
              className="object-cover w-full h-[500px]
            md:h-[600px] rounded-[200px_200px_0_0]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
