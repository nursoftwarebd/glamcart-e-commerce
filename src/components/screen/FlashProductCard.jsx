import { addToCart } from "@/redux/slices/cartSlice";
import {
  addToWishList,
  removeWishListItem,
} from "@/redux/slices/wishListSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import basket from "../../assets/icons/basket.svg";
import blankHeart from "../../assets/icons/blank_heart.svg";
import heart from "../../assets/icons/full_heart.svg";
import starColor from "../../assets/icons/star-color.svg";
import star from "../../assets/icons/star.svg";

const FlashProductCard = ({ item }) => {
  const { productName, productImage, price, discount, id } = item;
  const [isFlashWishList, setFlashWishList] = useState(false);
  const dispatch = useDispatch();

  // get data from local storage for check if this product is already is in wishlist or not
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isFlashWishList = wishlist.some(
      (wishlistItem) => wishlistItem.id === item.id
    );
    setFlashWishList(isFlashWishList);
  }, [item.id]);

  // Add product on card page
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart", { position: "top-right", autoClose: 1700 });
  };

  // Add or remove product on wishlist page
  const handleToggleWishList = (item) => {
    if (isFlashWishList) {
      dispatch(removeWishListItem(item));
      toast.error("Remove from wishlist!", { autoClose: 1700 });
    } else {
      dispatch(addToWishList(item));

      toast.success("Added to wishlist!", {
        position: "top-right",
        autoClose: 1700,
      });
    }
    setFlashWishList(!isFlashWishList);
  };

  return (
    <div className="bg-white border-[1px] w-full h-auto border-grayBorder px-[9px] pt-2 pb-[15px] rounded-[10px] flex flex-col">
      <div className="w-full flex items-end bg-imageBack rounded-[10px] relative group overflow-hidden">
        <Link href={`/product-details/${id}`} className="w-full">
          <div className="w-full md:h-[313px]">
            <Image
              src={productImage[0]}
              width={300}
              height={500}
              alt="flash-one"
              className=" object-cover w-full h-full group-hover:scale-110 duration-300"
            />
          </div>
        </Link>
        {item.discount && (
          <div className="absolute top-0 left-0 w-[91px] h-[30px] rounded-tl-[9px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px] bg-gradient-to-r from-[#FF7A00]  to-[#FFB800] px-[5px] flex items-center justify-center">
            <p className="text-sm text-white font-semibold">-{discount}% OFF</p>
          </div>
        )}

        <div
          onClick={() => handleToggleWishList(item)}
          className="cursor-pointer absolute top-[21px] right-[14px] w-[23px] h-5"
        >
          <Image
            src={isFlashWishList ? heart : blankHeart}
            alt="love"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* card details */}
      <div className="pt-[15px] pl-[5px] space-y-[10px] flex flex-col justify-start">
        {/* star */}
        <div className="flex items-center gap-[7px]">
          <div className="flex items-center">
            <Image src={starColor} alt="star-color" className="object-fill" />
            <Image src={starColor} alt="star-color" className="object-fill" />
            <Image src={starColor} alt="star-color" className="object-fill" />
            <Image src={starColor} alt="star-color" className="object-fill" />
            <Image src={star} alt="star" className="object-fill" />
          </div>
          <span className=" text-xs text-blackPrimary">(0)</span>
        </div>
        <p className="h5 text-blackSec pt-1 pb-2">
          <Link href={`/product-details/${id}`}>{productName}</Link>
        </p>
        <div
          className="flex items-center justify-between pr-[11px]"
          style={{ marginTop: "auto" }}
        >
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

export default FlashProductCard;
