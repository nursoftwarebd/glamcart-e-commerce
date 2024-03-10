"use client";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { useDispatch } from "react-redux";
import basket from "../../assets/icons/basket.svg";
import blankHeart from "../../assets/icons/blank_heart.svg";
import heart from "../../assets/icons/full_heart.svg";
import starcolor from "../../assets/icons/star-color.svg";
import star from "../../assets/icons/star.svg";

// const addToCart = dynamic(() => import("@/app/redux/slices/cartSlice"), {
//   ssr: false,
// });

import { addToCart } from "@/redux/slices/cartSlice";
import {
  addToWishList,
  removeWishListItem,
} from "@/redux/slices/wishListSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const [isWishList, setWishList] = useState(false);
  const { title, image, price } = item;
  const dispatch = useDispatch();

  // get data from local storage for check if this product is already is in wishlist or not
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isInWishlist = wishlist.some(
      (wishlistItem) => wishlistItem.id === item.id
    );
    setWishList(isInWishlist);
  }, [item.id]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

    toast.success("Added to cart", { position: "top-right", autoClose: 1700 });
  };

  const handleToggleWishList = (item) => {
    if (isWishList) {
      dispatch(removeWishListItem(item.id));
      toast.error("Remove from wishlist!", { autoClose: 1700 });
    } else {
      dispatch(addToWishList(item));
      toast.success("Added to wishlist!", {
        position: "top-right",
        autoClose: 1700,
      });
    }
    setWishList(!isWishList);
  };
  console.log(isWishList);

  return (
    <div className="bg-white border-[1px] w-full h-auto border-grayBorder px-[9px] pt-2 pb-[15px] rounded-[10px]">
      <Link href={"/product-details"}>
        <div className="w-full h-[313px] flex items-end bg-imageBack rounded-[10px] relative group overflow-hidden">
          <Image
            src={image}
            alt="product-images"
            className="w-full h-full mix-blend-multiply rounded-[10px] object-cover group-hover:scale-110 duration-300"
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
      </Link>
      {/* card details */}
      <div className="pt-[15px] pl-[5px] space-y-[10px] flex flex-col justify-between">
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
        <p className="h5 text-blackSec">
          <Link href={"/product-details"}>{title}</Link>
        </p>
        <div className="flex items-center justify-between pr-[11px] mt-auto">
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
