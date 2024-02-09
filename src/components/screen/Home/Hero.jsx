"use client";
// Import Swiper React components
import "swiper/css/pagination";
// Import Swiper styles
import Image from "next/image";
import Slider from "react-slick";
import "swiper/css";
import herothree from "../../../assets/images/home/herothree.png";
import herotwo from "../../../assets/images/home/herotwo.png";
import HeroBanner from "./HeroBanner";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    nextArrow: false,
    // autoplay: true,
    prevArrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: (dots) => <ul>{dots}</ul>,
    // customPaging: (i) => (
    //   <div className="ft-slick__dots--custom">
    //     <div className="loading" />
    //   </div>
    // ),
  };
  return (
    <section className="pt-3 bg-backgroundPage">
      <div className="container_fluid">
        <div className="grid lg:grid-cols-3 gap-7">
          <div className="w-full lg:col-span-2">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <HeroBanner />
                </div>
                <div>
                  <HeroBanner />
                </div>
                <div>
                  <HeroBanner />
                </div>
              </Slider>
            </div>
          </div>
          {/* for large screen */}
          <div className="hidden lg:grid lg:col-span-1 gap-y-7">
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
