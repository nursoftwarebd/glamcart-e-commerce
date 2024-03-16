"use client";
import { useState } from "react";
import ProductFeatures from "./ProductFeatures";
import SizeButton from "./SizeButton";
import TitleAndPrice from "./TitleAndPrice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "@/redux/slices/cartSlice";
import SecondaryButton from "@/components/shared/Button/SecondaryButton";

const AboutProduct = ({ product }) => {
  const [count, setCount] = useState(0);
  const [sizeValue, setSizeValue] = useState("");
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // product add on cart page
  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, sizeValue }));

    toast.success("Added to cart", { position: "top-right", autoClose: 1700 });
  };
  // console.log(sizeValue);
  return (
    <>
      <div className="">
        <TitleAndPrice product={product} />
        <ProductFeatures product={product} />
        <SizeButton
          product={product}
          setSizeValue={setSizeValue}
          sizeValue={sizeValue}
        />

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
              <div onClick={() => handleAddToCart(product)}>
                {/* <PrimaryButton title="Add cart" href="/card" /> */}
                <button className="focus:outline-none w-[120px] md:w-[165px] h-[45px] rounded-[3px] bg-secondary text-white duration-300 transition ease-in-out text-lg md:text-xl leading-6 font-medium flex items-center justify-center">
                  Add to cart
                </button>
              </div>
              <SecondaryButton title="Buy Now" href="/buy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;
