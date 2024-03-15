import Image from "next/image";
import "@smastrom/react-rating/style.css";
import { IoMdHeart } from "react-icons/io";
import tick from "../../../assets/icons/tick.svg";
import { Rating } from "@smastrom/react-rating";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeWishListItem,
} from "@/redux/slices/wishListSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const StarAndWishlist = ({ product }) => {
  const [isWishList, setWishList] = useState(false);
  const dispatch = useDispatch();

  // get data from local storage for check if this product is already is in wishlist or not
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isWishList = wishlist.some(
      (wishlistItem) => wishlistItem.id === product.id
    );
    setWishList(isWishList);
  }, [product.id]);

  const handleToggleWishList = (item) => {
    if (isWishList) {
      dispatch(removeWishListItem(item));
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


  return (
    <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
      <div className="flex items-center pr-0 sm:pr-4 sm:border-r-[2px] border-imageBack">
        <span className="font-medium text-lg text-blackPrimary leading-7">
          {product.rating}
        </span>
        <div className="px-1 flex items-center gap-[1px]">
          <Rating style={{ maxWidth: 100 }} value={product.rating} readOnly />
        </div>
        <span className="text-lg text-grayPrice leading-5">
          ({product.reviews.length})
        </span>
      </div>
      <div className="flex items-center pr-0 sm:px-4 sm:border-r-[2px] border-imageBack gap-2">
        <Image src={tick} alt="tick" className="w-[21px] h-[15px]" />
        <p className="font-semibold text-lg leading-7 text-blackPrimary">
          {product.soldQuantity} <span className="font-normal">Sold</span>
        </p>
      </div>
      <div className="flex items-center pl-0 sm:pl-4 gap-3">
        <IoMdHeart
          className={
            isWishList ? "text-3xl text-red-600" : "text-3xl text-gray-600"
          }
        />
        <button
          onClick={()=>handleToggleWishList(product)}
          className="text-lg font-bold text-secondary"
        >
          {isWishList ? "Remove from wishlist" : "Add to wishlist"}
        </button>
      </div>
    </div>
  );
};

export default StarAndWishlist;
