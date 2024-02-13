"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowRight from "../../assets/icons/arrow-right-2.svg";
import "../../styles/customswiper.css";

const TrySwiper = () => {
  return (
    <div className="h-6 relative border border-white px-5">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        spaceBetween={10}
        slidesPerView={7}
        navigation={{
          enabled: true,
          prevEl: ".prev-slide-button",
          nextEl: ".next-slide-button",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>WOMENS FASHION </SwiperSlide>
        <SwiperSlide>MENS FASHION</SwiperSlide>
        <SwiperSlide>KIDS FASHION</SwiperSlide>
        <SwiperSlide>HOME & LIFESTYLE</SwiperSlide>
        <SwiperSlide>ARTS & CRAFTS</SwiperSlide>
        <SwiperSlide>COMPUTER & ELECTRONICS</SwiperSlide>
        <SwiperSlide>FOOD & GROCERY</SwiperSlide>
        <SwiperSlide>WOMENS FASHION 2</SwiperSlide>
        <SwiperSlide>MENS FASHION3</SwiperSlide>
        <SwiperSlide>KIDS FASHION4</SwiperSlide>
        <SwiperSlide>HOME & LIFESTYLE5</SwiperSlide>
        <SwiperSlide>ARTS & CRAFTS6</SwiperSlide>
        <SwiperSlide>COMPUTER & ELECTRONICS7</SwiperSlide>
        <SwiperSlide>FOOD & GROCERY8</SwiperSlide>
      </Swiper>
      <button class="prev-slide-button pre_button">
        <Image src={arrowRight} alt="arrow-right-2" />
      </button>
      <button class="next-slide-button next_button">
        <Image src={arrowRight} alt="arrow-right-2" />
      </button>
    </div>
  );
};

export default TrySwiper;
