"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { removeWishListItem } from "@/redux/slices/wishListSlice";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import warning from "../../../assets/icons/warning.svg";
import { selectLoading, setLoading } from "../../../redux/slices/LoadingSlice";

const WishListProduct = () => {
  const isLoading = useSelector(selectLoading);
  const { wishList } = useSelector((state) => state.allWishlist);
  const dispatch = useDispatch();

  // Product add on cart page
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeWishListItem(item));
    toast.success("Added to cart", { position: "top-right", autoClose: 1700 });
  };

  // console.log(wishList);
  return (
    <>
      {wishList.length === 0 ? (
        <div>
          <div className="pt-8">
            <div className="p-8 bg-warningColo h-10 w-full flex items-center gap-3 ">
              <Image src={warning} alt="warning" />
              <p>You have no items in your wish list.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-5">
          {wishList.map((item) => (
            <div
              key={item.id}
              className="w-full p-4 lg:py-7 lg:pl-7 lg:pr-12 bg-white flex  flex-col md:flex-row lg:items-center justify-between"
            >
              <div className="flex md:flex-row gap-4 md:gap-6">
                <div className="w-[100px] h-[100px] sm:h-[130px] sm:w-[130px] rounded-[5px] border border-gray-300">
                  <Image
                    src={item.productImage[0]}
                    alt="checkout"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-sm sm:text-lg text-blackPrimary font-medium leading-5 sm:leading-[27px]">
                    {item.productName}
                  </h4>
                  <h5 className="text-base sm:text-lg leading-[27px] text-blackGray">
                    Sku {item.SKU}
                  </h5>
                  <h3 className="text-base sm:text-xl font-semibold leading-5 sm:leading-[30px] text-secondary">
                    ৳{item.price}
                  </h3>
                </div>
              </div>

              <div className="mt-4 lg:mt-0 flex items-center gap-5">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="cursor-pointer  font-bold text-secondary text-sm md-text-lg lg:text-xl"
                >
                  Add to cart
                </button>
                <div className="font-bold text-blackPrimary text-sm md-text-lg lg:text-xl">
                  ||
                </div>
                <button
                  onClick={() => dispatch(removeWishListItem(item))}
                  className="cursor-pointer  font-bold text-fadeRed text-sm md-text-lg lg:text-xl"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WishListProduct;
