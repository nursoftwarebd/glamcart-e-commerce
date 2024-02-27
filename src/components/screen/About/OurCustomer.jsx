"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../styles/customswiper.css";
import SliderCard from "./SliderCard";

import "swiper/css/pagination";

// import required modules

const OurCustomer = () => {
  return (
    <div className="py-[100px]">
      {/* title */}
      <div className="flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-heading30 xl:text-heading35 text-blackPrimary leading-[30px] font-semibold">
            Our Customer say about us
          </h1>
          <h4 className="max-w-[584px] leading-6 text-black/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h4>
        </div>
      </div>
      <div className="pt-11 pl-3 lg:pl-12">
        <div className="relative">
          <Swiper
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1365: {
                slidesPerView: 2.5,
                spaceBetween: 0,
              },
            }}
            navigation={{
              enabled: true,
              // prevEl: ".prev-slide-button",
              // nextEl: ".next-slide-button",
            }}
            modules={[Navigation]}
            className=""
          >
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
