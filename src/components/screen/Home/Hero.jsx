"use client";
// Import Swiper React components
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import { Pagination } from "swiper/modules";

import herothree from "../../../assets/images/home/herothree.png";
import herotwo from "../../../assets/images/home/herotwo.png";
import HeroBanner from "./HeroBanner";

const Hero = () => {
  return (
    <section className="pt-3 bg-backgroundPage">
      <div className="container_fluid">
        <div className="grid lg:grid-cols-3 gap-7">
          <div className="col-span-2">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <HeroBanner />
              </SwiperSlide>
              <SwiperSlide>
                <HeroBanner />
              </SwiperSlide>
              <SwiperSlide>
                <HeroBanner />
              </SwiperSlide>
              <SwiperSlide>
                <HeroBanner />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* for large screen */}
          <div className="hidden lg:grid col-span-1 gap-y-7">
            <div className="relative">
              <div className="w-full h-[226px] xl:h-[267.5px]">
                <Image
                  src={herotwo}
                  alt="hero-two"
                  className="w-full h-full object-fill rounded-[10px]"
                />
              </div>
              <div className="absolute left-[50px] xl:left-[64px]   bottom-[20px] rounded-[5px]  h-[56px] px-4 xl:px-8 py-4  bg-backgroundPage/80 ">
                <h4 className="text-secondary hero-banner">
                  Groceries collection
                </h4>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[226px] xl:h-[267.5px]">
                <Image
                  src={herothree}
                  alt="hero-three"
                  className="w-full h-full object-fill rounded-[10px]"
                />
              </div>
              <div className="absolute  left-[28px]   bottom-[20px] rounded-[5px]  h-[56px] px-4 xl:px-8 py-4  bg-backgroundPage/80">
                <h4 className="hero-banner text-secondary">
                  Health & Beauty collection
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
