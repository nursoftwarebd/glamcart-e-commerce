"use client";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from '../../../assets/images/home/bag.png';
import pic2 from '../../../assets/images/home/chair-to.png';
import pic5 from '../../../assets/images/home/dressblack.png';
import pic3 from '../../../assets/images/home/flash3.png';
import pic4 from '../../../assets/images/home/ydress.png';
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";

const SliderProduct = () => {
 
  const [imag, setimag] = useState(pic1);
  const imagepack = [
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
    prevArrow:<DownArrow />,
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
        <div className=" flex  gap-[25px] ">
          <div className="w-[75%] border border-red-500">
            {/* <ReactImageZoom {...prop1} /> */}
             {/* <Image src={`${imag}`} alt="big"  className="w-[550px] h-[550px]"/> */}
            <Image
              src={imag}
              alt="bigimage"
              className=" w-[550px] h-[500px] 2xl:h-[550px] border border-red-500"
            />
          </div>

          <div className="w-[25%] relative space-y-[7px] flex flex-col items-center justify-center">
            <Slider {...settings} className="w-[104px]">
              {imagepack.map((imgitem, index) => {
                return (
                  <>
                    <div
                      key={index}
                      onClick={() => setimag(imgitem.img)}
                      className="w-full h-[92px] 2xl:h-[104px]"
                    >
                      <Image
                        src={imgitem.img}
                        alt="small_images"
                        className="w-full object-fill h-[92px] 2xl:h-[104px] border border-red-500"
                      />
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderProduct;
