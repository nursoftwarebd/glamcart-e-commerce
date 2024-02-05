"use client";
import { navLinks } from "@/data/navLinks";

const DragMenu = () => {
  // var settings = {
  //   dots:null,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   nextArrow:<NextArrow />,
  //   // prevArrow:slick-disabled ,
  //   initialSlide: 0,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]

  // };
  // <Slider  {...settings} ></Slider>
  return (
    <>
      <div className="hidden xl:flex lg:mx-8 mt-[25px] relative">
        <ul className="flex items-center gap-8 2xl:gap-10">
          {navLinks.map((link, index) => {
            return (
              <li key={index} className="menu_list group relative">
                {link.name}
                <ul className="hidden duration-500 group-hover:block bg-red-500 absolute top-[30px] z-50">
                  {link.submenu?.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DragMenu;
