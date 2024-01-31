'use client'
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
const DragMenu = () => {
  

  var settings = {
    dots:null,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:<NextArrow />,
    // prevArrow:slick-disabled ,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  
  return (
    <>
      <div className="lg:mx-8 mt-[25px] relative">
        <ul className="">
      <Slider  {...settings} >
          {navLinks.map((link, index)=>{
            return(
              <li key={index} className="">
                <Link href={link.href} className="menu_list" >{link.name}</Link>
              </li>
            )
          })}
        </Slider>
        </ul>
      </div>
    </>
  );
};

export default DragMenu;