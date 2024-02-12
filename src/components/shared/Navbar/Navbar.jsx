"use client";
import LogInModal from "@/components/common/LogInModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import bucket from "../../../assets/icons/bucket.svg";
import search from "../../../assets/icons/bx_bx-search.svg";
import heart from "../../../assets/icons/heart.svg";
import user from "../../../assets/icons/user.svg";
import logo from "../../../assets/logo.svg";
import DragMenu from "./DragMenu";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <header className="h-[130px] lg:h-[147px] bg-backgroundNav border-b-[1.5px] border-navBorder">
      <div className="container_fluid">
        <div className="flex items-center justify-between pt-3">
          {/* logo */}
          <Link href={"/"} className="hidden lg:flex w-[141px] h-[80px]">
            <Image
              src={logo}
              alt="logo"
              className="w-full h-full object-center object-fill"
            />
          </Link>
          <div className="w-full lg:w-[365px] xl:w-[665px] 2xl:w-[778px] h-[50px] border-[1px] border-border rounded-[5px]  flex items-center">
            <input
              placeholder="I'm looking for..."
              type="text"
              className="w-full lg:w-[300px] xl:w-[600px] 2xl:w-[713px] h-[50px] py-[13px] pl-5 bg-bgSearch outline-none placeholder:text-grayPlace"
            />
            <button className="w-[65px] h-[50px] bg-secondary rounded-tr-[5px] rounded-br-[5px] flex items-center justify-center">
              <Image
                src={search}
                alt="search"
                className="w-7 h-7 object-fill"
              />
            </button>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-10">
              <button
                onClick={() => setOpenModal(!openModal)}
                type="button"
                className="flex items-center gap-[6px] text-lightText
              "
              >
                <span className="w-6 h-6 px-[4.81px] py-[2.81px]">
                  <Image
                    src={user}
                    alt="user"
                    className="w-[14.18px] h-[18px] object-fill object-center"
                  />
                </span>
                <span className=" leading-[120%] tracking-[0.08px]">Login</span>
              </button>
              {openModal && (
                <LogInModal openModal={openModal} setOpenModal={setOpenModal} />
              )}
              <Link
                href="#"
                className="flex items-center gap-[6px] text-lightText
              "
              >
                <span className="w-6 h-6 px-[4.81px] py-[2.81px]">
                  <Image
                    src={heart}
                    alt="user"
                    className="w-[19px] h-[18px] object-fill object-center"
                  />
                </span>
                <span className=" leading-[120%] tracking-[0.08px]">
                  Wishlist
                </span>
              </Link>
              <a
                href="#"
                className="flex items-center gap-[6px] text-lightText
              "
              >
                <span className="w-[23px] h-5">
                  <Image
                    src={bucket}
                    alt="cart"
                    className="w-full h-full object-fill object-center"
                  />
                </span>
                <span className=" leading-[120%] tracking-[0.08px]">
                  My cart
                </span>
              </a>
            </div>
            <div className="ml-2 w-5 h-5 rounded-full flex items-center justify-center bg-fadeRed">
              <span className="text-white font-medium text-xs">1</span>
            </div>
          </div>
        </div>
        {/* menu part */}
        <DragMenu />
      </div>
    </header>
  );
};

export default Navbar;
