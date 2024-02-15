"use client";
import PrimaryButton from "@/components/shared/Button/PrimaryButton";
import SecondaryButton from "@/components/shared/Button/SecondaryButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import checkstar from "../../../assets/icons/check-star.svg";
import checkfill from "../../../assets/icons/checkfill.svg";
import loveass from "../../../assets/icons/love_ass.svg";
import bstar from "../../../assets/icons/star.svg";
import tick from "../../../assets/icons/tick.svg";

const AboutProduct = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="">
        <div className="border-b-[1px] border-border pb-5">
          <h3 className=" font-medium text-xl sm:text-heading2 leading-7 sm:leading-10 text-blackPrimary">
            Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser
          </h3>
          <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center pr-0 sm:pr-4 sm:border-r-[2px] border-imageBack">
              <span className="font-medium text-lg text-blackPrimary leading-7">
                4.0
              </span>
              <div className="px-1 flex items-center gap-[1px]">
                <Image
                  src={checkstar}
                  alt="check-star"
                  className="w-6 h-6 object-fill"
                />
                <Image
                  src={checkstar}
                  alt="check-star"
                  className="w-6 h-6 object-fill"
                />
                <Image
                  src={checkstar}
                  alt="check-star"
                  className="w-6 h-6 object-fill"
                />
                <Image
                  src={checkstar}
                  alt="check-star"
                  className="w-6 h-6 object-fill"
                />
                <Image
                  src={bstar}
                  alt="check-star"
                  className="w-6 h-6 object-fill"
                />
              </div>
              <span className="text-lg text-grayPrice leading-5">(223)</span>
            </div>
            <div className="flex items-center pr-0 sm:px-4 sm:border-r-[2px] border-imageBack gap-2">
              <Image src={tick} alt="tick" className="w-[21px] h-[15px]" />
              <p className="font-semibold text-lg leading-7 text-blackPrimary">
                4,320 <span className="font-normal">Sold</span>
              </p>
            </div>
            <div className="flex items-center pl-0 sm:pl-4">
              <Image
                src={loveass}
                alt="love_ass"
                className="w-[22px] h-[19px]"
              />
              <Link
                href={"#"}
                className="pl-4 text-lg leading-5 font-bold text-secondary"
              >
                Add to wishlist
              </Link>
            </div>
          </div>
          <div className="pt-8 flex items-center gap-6">
            <h2 className="text-2xl sm:text-4xl leading-[54px] font-semibold text-secondary">
              $976.33
            </h2>
            <div className="flex items-center gap-4">
              <p className="line-through text-lg sm:text-xl leading-[30px] text-lineThrough">
                $1,020.99
              </p>
              <div className="w-[38px] h-7 sm:w-[48px] sm:h-[30px] bg-gradient-to-r from-[#FF7A00] to-[#FFB800] rounded-[2px]  flex items-center justify-center">
                <p className="text-white text-xs sm:text-sm font-semibold leading-5">
                  20%
                </p>
              </div>
            </div>
          </div>
          <div className="pt-1 sm:pt-3 flex items-center gap-4">
            <p className="leading-6 text-black3D font-medium">
              SKU:{" "}
              <span className="text-grayView font-normal">12314124124</span>
            </p>
            <div className="flex items-center gap-1">
              <Image src={checkfill} alt="checkfill" className="w-4 h-4" />
              <p className="text-grayView leading-6">In Stock</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p className="text-lg leading-[30px] text-blackPrimary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ul className="list-disc list-inside pt-3 pl-3 text-lg leading-9 text-blackPrimary">
            <li> Direct Full Array </li>
            <li> Quantum Dot Technology </li>
            <li> Ambient Mode </li>
            <li> One Remote Control </li>
          </ul>
        </div>

        <div className="py-8 flex items-center gap-4">
          <p className="text-paragraph1 leading-7 text-blackPrimary">Size</p>
          <button className="size_button">S</button>
          <button className="size_button">M</button>
          <button className="size_button !bg-primary !text-white">L</button>
          <button className="size_button">Xl</button>
          <button className="size_button">XXl</button>
        </div>
        <div className="flex  items-center gap-9">
          <div className="flex flex-wrap items-center gap-5">
            <p className="text-sm leading-5 text-black3D">Quantity: </p>
            <div className="w-[85px] h-[35px] flex items-center">
              <button
                onClick={decrement}
                className="w-[26px] h-full px-2 py-[2px] bg-grayPlusBg text-grayPlusText leading-6"
              >
                -
              </button>
              <span className="h-full p-2  bg-white text-blackPrimary leading-6">
                {count}
              </span>
              <button
                onClick={increment}
                className="w-[26px] h-full px-2 py-[2px] bg-grayPlusBg text-grayPlusText leading-6"
              >
                +
              </button>
            </div>
            <PrimaryButton title="Add cart" href="/card" />
            <SecondaryButton title="Buy Now" href="/buy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;
