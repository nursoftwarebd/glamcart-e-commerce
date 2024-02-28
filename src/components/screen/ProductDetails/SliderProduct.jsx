"use client";
import SocialShare from "@/components/common/SocialShare";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../../assets/images/home/bag.png";
import pic2 from "../../../assets/images/home/chair-to.png";
import pic5 from "../../../assets/images/home/dressblack.png";
import pic3 from "../../../assets/images/home/flash3.png";
import pic4 from "../../../assets/images/home/ydress.png";
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";

const SliderProduct = () => {
  const [isImage, setImage] = useState(pic1);
  const imagePack = [
    {
      id: 1,
      img: pic1,
    },
    {
      id: 2,
      img: pic2,
    },
    {
      id: 3,
      img: pic3,
    },
    {
      id: 4,
      img: pic4,
    },
    {
      id: 5,
      img: pic5,
    },
    {
      id: 6,
      img: pic2,
    },
    {
      id: 7,
      img: pic4,
    },
    {
      id: 8,
      img: pic3,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <UpArrow />,
    prevArrow: <DownArrow />,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div>
        <div className="w-full flex  gap-[25px] ">
          <div className="w-[85%] sm:w-[75%]">
            <Image
              src={isImage}
              alt="big-image"
              className="w-[550px] h-[350px] sm:h-[500px] 2xl:h-[550px]"
            />
          </div>

          <div className="w-[15%] sm:w-[25%] relative space-y-[7px] flex flex-col items-center justify-center">
            <Slider {...settings} className="w-full sm:w-[104px]">
              {imagePack.map((imgItem, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setImage(imgItem.img)}
                    className="w-12 h-12 sm:w-full sm:h-[92px] 2xl:h-[104px] outline-none cursor-pointer"
                  >
                    <Image
                      src={imgItem.img}
                      alt="small_images"
                      className="object-fill w-12 h-12 sm:w-full sm:h-[92px] 2xl:h-[104px]"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="pt-11">
          <SocialShare />
        </div>
      </div>
    </>
  );
};

export default SliderProduct;
