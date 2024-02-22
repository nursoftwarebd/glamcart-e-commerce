"use client";
import { addToCart } from "@/app/redux/slices/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import basket from "../../../assets/icons/basket.svg";
import love from "../../../assets/icons/love.svg";
import starcolor from "../../../assets/icons/star-color.svg";
import star from "../../../assets/icons/star.svg";

const FlashProduct = () => {
  const items = useSelector((state) => state.allcarts.flashProducts);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast("Add to cart!", { autoClose: 1700 });
  };

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border-[1px] w-full h-auto border-grayBorder px-[9px] pt-2 pb-[15px] rounded-[10px]"
        >
          <div className="w-full h-[313px] flex items-end bg-imageBack rounded-[10px] relative">
            <Image src={item.image} alt="flash-one" className=" object-fill" />
            <div className="absolute top-0 left-0 w-[91px] h-[30px] rounded-tl-[9px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px] bg-gradient-to-r from-[#FF7A00]  to-[#FFB800] px-[5px] flex items-center justify-center">
              <p className="text-sm text-white font-semibold">
                -{item.sale}% OFF
              </p>
            </div>
            <div className="absolute top-[21px] right-[14px] w-[23px] h-5">
              <Image src={love} alt="love" className="w-full h-full" />
            </div>
          </div>
          {/* card details */}
          <div className="pt-[15px] pl-[5px] space-y-[10px]">
            {/* star */}
            <div className="flex items-center gap-[7px]">
              <div className="flex items-center">
                <Image
                  src={starcolor}
                  alt="star-color"
                  className="object-fill"
                />
                <Image
                  src={starcolor}
                  alt="star-color"
                  className="object-fill"
                />
                <Image
                  src={starcolor}
                  alt="star-color"
                  className="object-fill"
                />
                <Image
                  src={starcolor}
                  alt="star-color"
                  className="object-fill"
                />
                <Image src={star} alt="star" className="object-fill" />
              </div>
              <span className=" text-xs text-blackPrimary">(0)</span>
            </div>
            <h5 className="h5 text-blackSec">{item.title}</h5>
            <div className="flex items-center justify-between pr-[11px]">
              <h4 className="h4 text-primary">৳{item.price}</h4>
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
      ))}
    </div>
  );
};

export default FlashProduct;
