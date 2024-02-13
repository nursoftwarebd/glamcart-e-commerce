"use client";
import TrySwiper from "@/components/common/TrySwiper";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/customswiper.css";

const DragMenu = () => {
  return (
    <>
      <div className="mt-[25px]">
        <div className="xl:hidden ">
          <TrySwiper />
        </div>
        <div className="hidden xl:flex x1xl:mx-8  relative">
          <div className="flex items-center  gap-8 xl:gap-8 x1xl:gap-14 2xl:gap-12">
            {navLinks.map((link, index) => (
              <div key={index} className="menu_list group">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DragMenu;
