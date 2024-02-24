"use client";
import { addToCart, removeWishListItem } from "@/app/redux/slices/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishListProduct = () => {
  const { wishList } = useSelector((state) => state.allcarts);
  console.log(wishList);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast("Add to cart!", { autoClose: 1700 });
  };

  return (
    <div>
      <div className="w-full">
        {wishList.map((item) => (
          <div
            key={item.id}
            className="w-full py-7 pl-7 pr-12 bg-white flex items-center justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <Image
                src={item.image}
                alt={`checkout ${item.title}`}
                className="w-[100px] h-[100px] sm:h-[130px] sm:w-[130px] rounded-[5px]"
              />
              <div className="space-y-2 sm:space-y-5">
                <h4 className="text-sm sm:text-lg text-blackPrimary font-medium leading-5 sm:leading-[27px]">
                  {item.title}
                </h4>
                <h5 className="text-base sm:text-lg leading-[27px] text-blackGray">
                  Sku {item.sku}
                </h5>
                <h3 className="text-base sm:text-xl font-semibold leading-5 sm:leading-[30px] text-secondary">
                  ৳{item.price}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={() => handleAddToCart(item)}
                className="cursor-pointer w-[120px] border border-red-400"
              >
                Add To cart
              </button>

              <button
                onClick={() => dispatch(removeWishListItem(item.id))}
                className="cursor-pointer w-[120px] border border-red-400"
              >
                Remove items
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListProduct;
