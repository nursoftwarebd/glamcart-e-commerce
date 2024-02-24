"use client";
import {
  addToCart,
  addToWishList,
  removeWishListItem,
} from "@/app/redux/slices/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import basket from "../../assets/icons/basket.svg";
import blankHeart from "../../assets/icons/blank_heart.svg";
import heart from "../../assets/icons/full_heart.svg";
import starcolor from "../../assets/icons/star-color.svg";
import star from "../../assets/icons/star.svg";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const [isWishList, setWishList] = useState(false);
  const { title, image, price } = item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast("Add to cart!", { autoClose: 1700 });
  };

  const handleToggleWishList = (item) => {
    if (isWishList) {
      dispatch(removeWishListItem(item.id));
      toast.error("Remove from wishlist!", { autoClose: 1700 });
    } else {
      dispatch(addToWishList(item));
      toast("Added to wishlist!", { autoClose: 1700 });
    }
    setWishList(!isWishList);
  };

  return (
    <div className="bg-white border-[1px] w-full h-auto border-grayBorder px-[9px] pt-2 pb-[15px] rounded-[10px]">
      <div className="w-full h-[313px] flex items-end bg-imageBack rounded-[10px] relative">
        <Image
          src={image}
          alt="product-images"
          className="w-full h-full mix-blend-multiply rounded-[10px] object-fill"
        />
        <div
          onClick={() => handleToggleWishList(item)}
          className="cursor-pointer absolute top-[21px] right-[14px] w-[23px] h-5"
        >
          <Image
            src={isWishList ? heart : blankHeart}
            alt="love"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* card details */}
      <div className="pt-[15px] pl-[5px] space-y-[10px]">
        {/* star */}
        <div className="flex items-center gap-[7px]">
          <div className="flex items-center">
            <Image src={starcolor} alt="star-color" className="object-fill" />
            <Image src={starcolor} alt="star-color" className="object-fill" />
            <Image src={starcolor} alt="star-color" className="object-fill" />
            <Image src={starcolor} alt="star-color" className="object-fill" />
            <Image src={star} alt="star" className="object-fill" />
          </div>
          <span className=" text-xs text-blackPrimary">(0)</span>
        </div>
        <h5 className="h5 text-blackSec">{title}</h5>
        <div className="flex items-center justify-between pr-[11px]">
          <h4 className="h4 text-primary">৳{price}</h4>
          {/* ::: cart :::: */}
          <button
            onClick={() => handleAddToCart(item)}
            className="w-[24px] h-[21px] "
          >
            <Image
              src={basket}
              alt="basket"
              className="w-full h-full object-fill"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
