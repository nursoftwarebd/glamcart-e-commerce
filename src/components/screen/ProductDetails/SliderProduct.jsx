"use client";
import SocialShare from "@/components/common/SocialShare";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";

const SliderProduct = ({productImage}) => {
  const [isImage, setImage] = useState(productImage[0]);
 

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <UpArrow />,
    prevArrow: <DownArrow />,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div>
        <div className="w-full flex  gap-[25px] ">
          <div className="w-[85%] sm:w-[75%]">
            <Image
              src={isImage}
              width={400}
              height={400}
              alt="big-image"
              className="w-full h-auto lg:h-[350px] 2xl:h-[550px] object-cover"
            />
          </div>

          <div className="w-[15%] sm:w-[25%] relative space-y-[7px] flex flex-col items-center justify-center">
            <Slider {...settings} className="w-full sm:w-[104px]">
              {productImage.map((imgItem, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setImage(imgItem)}
                    className="w-12 h-12 sm:w-full sm:h-[92px] 2xl:h-[104px] outline-none cursor-pointer"
                  >
                    <Image
                      src={imgItem}
                      width={200}
                      height={200}
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
