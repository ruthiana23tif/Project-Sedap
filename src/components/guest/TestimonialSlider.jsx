import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonials from "../../data/guest/testimonials.json";

const TestimonialSlider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 relative">
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6 md:p-10 gap-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-1/3 h-auto rounded-xl object-cover"
              />
              <div className="text-center md:text-left md:w-2/3">
                <p className="text-4xl text-[#00B074] font-bold mb-4">🍽️</p>
                <p className="text-gray-600 text-lg font-Muli text-[18px] mb-4 leading-relaxed">{item.text}</p>
                <h3 className="font-semibold font-jost text-[25px] text-gray-900">{item.name}</h3>
                <p className=" font-Muli text-[15px] text-gray-500">{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        
        <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button className="w-10 h-10 bg-[#00B074] text-white rounded-full shadow hover:bg-[#00B074] transition-all flex items-center justify-center">
            ←
          </button>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button className="w-10 h-10 bg-white border text-black rounded-full shadow hover:bg-gray-100 transition-all flex items-center justify-center">
            →
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
