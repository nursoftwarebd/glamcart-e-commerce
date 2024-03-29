"use client";
import { homeHeroSlider } from "@/data/homeHeroSlider";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import herothree from "../../../assets/images/home/herothree.png";
import herotwo from "../../../assets/images/home/herotwo.png";
import "../../../styles/customHeroSwiper.css";
import HeroBanner from "./HeroBanner";

const Hero = () => {
  return (
    <section className="pt-3 bg-backgroundPage">
      <div className="container_fluid">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7">
          <div className="w-full col-span-1 lg:col-span-2">
            <Swiper
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              loop={true}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {homeHeroSlider.map((heroITem) => (
                <SwiperSlide key={heroITem.id}>
                  <HeroBanner heroITem={heroITem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* for large screen */}
          <div className="hidden lg:grid lg:col-span-1 gap-y-7">
            <div className="relative overflow-hidden rounded-[10px]">
              <div className="w-full h-[226px] xl:h-[267.5px] group">
                <Image
                  src={herotwo}
                  alt="hero-two"
                  className="w-full h-full object-fill  group-hover:scale-110 duration-300"
                />
              </div>
              <div className="absolute left-[50px] xl:left-[50px] x1xl:left-[65px] x1440:left-[80px] 2xl:left-[75px]   bottom-[20px] rounded-[5px]  h-[56px] px-4 xl:px-8 py-4  bg-backgroundPage/80 ">
                <h4 className="text-secondary hero-banner">
                  Groceries collection
                </h4>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[10px]">
              <div className="w-full h-[226px] xl:h-[267.5px] group">
                <Image
                  src={herothree}
                  alt="hero-three"
                  className="w-full h-full object-fill rounded-[10px] group-hover:scale-110 duration-300"
                />
              </div>
              <div className="absolute bottom-[20px] left-[28px] lg:left-[22px] xl:left-[20px] x1xl:left-[30px] x1440:left-[45px] 2xl:left-[45px] rounded-[5px]  h-[56px] px-4 xl:px-8 py-4  bg-backgroundPage/80">
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
