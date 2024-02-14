"use client";
import Hamburger from "@/components/common/Hamburger";
import { tabs } from "@/data/tabs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CustomerLayout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="pt-6 pb-21 bg-backgroundPage">
      <div className="container_fluid">
        <div className="flex items-center justify-between relative">
          <h3 className="my_account">My Account</h3>
          <div onClick={toggleMenu} className="flex lg:hidden">
            <Hamburger />
          </div>
          <div
            className={`lg:hidden ${
              isOpen ? "block" : "hidden"
            }  absolute right-0 z-[999] top-[30px] w-[280px] bg-white  px-4  flex  flex-col justify-center items-center shadow-md transition-all duration-300`}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-[10px] w-[280px]  ${
                  pathname === tab.link
                    ? "border-l-[3px] border-secondary text-secondary"
                    : "border-l-[3px] border-transparent"
                }`}
              >
                <div className="border-dashed border-b-[1px] pl-[10px] py-[14px] text-start account_list">
                  <Link
                    href={tab.link}
                    onClick={toggleMenu}
                    className="flex items-center  gap-2"
                  >
                    <Image src={tab.img} alt="" />
                    {tab.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-6 w-full flex flex-col lg:flex-row gap-5">
          {/* large screen */}
          <div className="w-[280px] h-fit bg-white shadow-md hidden lg:flex flex-col">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-[10px] w-[280px]  ${
                  pathname === tab.link
                    ? "border-l-[3px] border-secondary text-secondary"
                    : "border-l-[3px] border-transparent"
                }`}
              >
                <div className="border-dashed border-b-[1px] pl-[10px] py-[14px] text-start account_list">
                  <Link href={tab.link} className="">
                    {tab.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-fit">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLayout;
