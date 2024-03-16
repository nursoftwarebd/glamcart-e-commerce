"use client";
import { customerData } from "@/data/customerData";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../../assets/icons/sl-left-arrow.svg";
import rightArrow from "../../../assets/icons/sl-right-arrow.svg";
import "../../../styles/customswiper.css";
import SliderCard from "./SliderCard";

const OurCustomer = () => {
  return (
    <div className="pt-[100px] pb-[150px] xl:pb-[196px] bg-backgroundPage">
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
      <div className="pt-11 pl-3 lg:pl-12 relative max-w-[1680px] ml-auto">
        <div className="">
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
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1365: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
            navigation={{
              enabled: true,
              prevEl: ".customer_pre_button",
              nextEl: ".customer_next_button",
            }}
            modules={[Navigation]}
            className=""
          >
            {customerData.map((cData) => (
              <SwiperSlide key={cData.id}>
                <SliderCard cData={cData} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="customer_pre_button w-[57px] h-[57px] bg-white flex items-center justify-center rounded-full shadow-lg">
            <Image src={leftArrow} alt="left-arrow" />
          </button>
          <button className="customer_next_button w-[57px] h-[57px]  bg-secondary  flex items-center justify-center rounded-full shadow-lg">
            <Image src={rightArrow} alt="left-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
