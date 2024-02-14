"use client";
import { tabs } from "@/data/tabs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CustomerLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="pt-6 pb-21 bg-backgroundPage">
      <div className="container_fluid">
        <div className="flex items-center justify-between">
          <h3 className="my_account">My Account</h3>
          <div onClick={toggleMenu} className="flex lg:hidden">
            =
          </div>
        </div>
        <div className="pt-6 flex flex-col lg:flex-row gap-5">
          <div
            className={`lg:hidden ${
              isOpen ? "block" : "hidden"
            } fixed top-0 left-0 inset-0 z-50 bg-white px-4  flex  flex-col justify-center items-center shadow-md transition-all duration-300`}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="border-dashed border-b-[1px] w-full pl-[18px] py-[14px] text-start account_list"
              >
                <Link
                  href={tab.link}
                  onClick={toggleMenu}
                  className="flex items-center  gap-2"
                >
                  <Image src={tab.img} alt="" />
                  {tab.title}
                </Link>
              </div>
            ))}
          </div>

          {/* large screen */}
          <div className="w-[280px] h-fit bg-white shadow-md hidden lg:flex flex-col">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="border-dashed border-b-[1px] w-full pl-[18px] py-[14px] text-start account_list"
              >
                <Link href={tab.link}>{tab.title}</Link>
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
