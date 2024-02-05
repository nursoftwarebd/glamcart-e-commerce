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
                  <div className="w-full duration-500 invisible group-hover:visible  bg-white absolute top-[30px] left-0 z-[999] px-[74px] py-8">
                    <div className="grid grid-cols-5 ">
                      <div>
                        {link.submenu?.slice(0, 1).map((items, index) => (
                          <div key={index}>
                            <p className="font-medium text-black3D leading-6 capitalize">
                              {items.title}
                            </p>
                            {items.subcat?.map((menu, index) => (
                              <ul key={index}>
                                <li>
                                  <Link
                                    href={menu.href}
                                    className="text-sm text-grayView leading-[21px] capitalize"
                                  >
                                    {menu.name}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div>
                        {link.submenu?.slice(1, 2).map((items, index) => (
                          <div key={index}>
                            <p className="font-medium text-black3D leading-6 capitalize">
                              {items.title}
                            </p>
                            {items.subcat?.map((menu, index) => (
                              <ul key={index}>
                                <li>
                                  <Link
                                    href={menu.href}
                                    className="text-sm text-grayView leading-[21px] capitalize"
                                  >
                                    {menu.name}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div>
                        {link.submenu?.slice(2, 3).map((items, index) => (
                          <div key={index}>
                            <p className="font-medium text-black3D leading-6 capitalize">
                              {items.title}
                            </p>
                            {items.subcat?.map((menu, index) => (
                              <ul key={index}>
                                <li>
                                  <Link
                                    href={menu.href}
                                    className="text-sm text-grayView leading-[21px] capitalize"
                                  >
                                    {menu.name}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div>
                        {link.submenu?.slice(3, 4).map((items, index) => (
                          <div key={index}>
                            <p className="font-medium text-black3D leading-6 capitalize">
                              {items.title}
                            </p>
                            {items.subcat?.map((menu, index) => (
                              <ul key={index}>
                                <li>
                                  <Link
                                    href={menu.href}
                                    className="text-sm text-grayView leading-[21px] capitalize"
                                  >
                                    {menu.name}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-6">
                        <div>
                          {link.submenu?.slice(4, 5).map((items, index) => (
                            <div key={index}>
                              <p className="font-medium text-black3D leading-6 capitalize">
                                {items.title}
                              </p>
                              {items.subcat?.map((menu, index) => (
                                <ul key={index}>
                                  <li>
                                    <Link
                                      href={menu.href}
                                      className="text-sm text-grayView leading-[21px] capitalize"
                                    >
                                      {menu.name}
                                    </Link>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div>
                          {link.submenu?.slice(5, 6).map((items, index) => (
                            <div key={index}>
                              <p className="font-medium text-black3D leading-6 capitalize">
                                {items.title}
                              </p>
                              {items.subcat?.map((menu, index) => (
                                <ul key={index}>
                                  <li>
                                    <Link
                                      href={menu.href}
                                      className="text-sm text-grayView leading-[21px] capitalize"
                                    >
                                      {menu.name}
                                    </Link>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
