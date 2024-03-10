"use client";
import PrimaryButton from "@/components/shared/Button/PrimaryButton";
import SecondaryButton from "@/components/shared/Button/SecondaryButton";
import { useState } from "react";
import ProductFeatures from "./ProductFeatures";
import SizeButton from "./SizeButton";
import TitleAndPrice from "./TitleAndPrice";

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
        <TitleAndPrice />
        <ProductFeatures />
        <SizeButton />

        <div className="flex  items-center gap-9">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <p className="text-sm leading-5 text-black3D">Quantity: </p>
              <div className="w-[90px] h-[35px] flex items-center">
                <button
                  onClick={decrement}
                  className="w-[30px] h-full px-2 py-[2px] bg-grayPlusBg text-grayPlusText leading-6"
                >
                  -
                </button>
                <span className="w-[30px] h-full p-2 text-center  bg-white text-blackPrimary leading-6">
                  {count}
                </span>
                <button
                  onClick={increment}
                  className="w-[30px] h-full px-2 py-[2px] bg-grayPlusBg text-grayPlusText leading-6"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <PrimaryButton title="Add cart" href="/card" />
              <SecondaryButton title="Buy Now" href="/buy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;
