"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";

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
      <div className="relative">
        <div className="hidden xl:flex lg:mx-8 mt-[25px]">
          <ul className="flex items-center gap-8 2xl:gap-10">
            {navLinks.map((link, index) => {
              return (
                <li key={index} className="menu_list group">
                  {link.name}
                  <div className="w-full duration-500 invisible group-hover:visible  bg-blue-300 absolute top-[30px] left-0 z-[999] px-[74px] py-8">
                    {link.submenu?.slice(0, 1).map((items, index) => (
                      <div key={index}>
                        <p>{items.title}</p>
                        {items.subcat?.map((menu, index) => (
                          <ul key={index}>
                            <li>
                              <Link href={menu.href}>{menu.name}</Link>
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DragMenu;
