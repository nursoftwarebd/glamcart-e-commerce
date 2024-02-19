"use client";
import Checkbox from "@/components/common/Checkbox";
import { checkOutData } from "@/data/checkOutData";
import Image from "next/image";
import { useSelector } from "react-redux";
import plusIcon from "../../../assets/icons/+.svg";
import minusIcon from "../../../assets/icons/-.svg";
import {
  default as deleteButton,
  default as deleteItem,
} from "../../../assets/icons/delete.svg";

const CardCheckout = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allcarts
  );
  console.log(cart);

  return (
    <div className="w-auto 2xl:max-w-[937px] space-y-5">
      <div className="py-7.5 pl-6.5 pr-12 w-auto 2xl:max-w-[937px] bg-white flex items-center justify-between">
        {/* all select */}
        <div className="flex items-center gap-10">
          <Checkbox />
          <p className="leading-6 text-blackPrimary">Select All</p>
        </div>
        <button className="flex items-center gap-1">
          <Image src={deleteButton} alt="deleteButton" />
          <span className="font-medium text-grayDelete leading-6 ">REMOVE</span>
        </button>
      </div>

      <div className="space-y-5">
        {checkOutData.map((checkOutData) => {
          return (
            <div
              key={checkOutData.id}
              className="w-full py-7 pl-7 pr-12 bg-white flex items-center gap-10"
            >
              <Checkbox />
              <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <Image
                    src={checkOutData.img}
                    alt={`checkout ${checkOutData.name}`}
                    className="w-[100px] h-[100px] sm:h-[130px] sm:w-[130px] rounded-[5px]"
                  />
                  <div className="space-y-2 sm:space-y-5">
                    <h4 className="text-sm sm:text-lg text-blackPrimary font-medium leading-5 sm:leading-[27px]">
                      {checkOutData.name}
                    </h4>
                    <h3 className="text-base sm:text-xl font-semibold leading-5 sm:leading-[30px] text-secondary">
                      {checkOutData.price}
                    </h3>
                  </div>
                </div>
                <div className="space-y-5 sm:space-y-11">
                  <h5 className="text-base sm:text-lg text-start sm:text-end leading-[27px] text-blackGray">
                    {checkOutData.sku}
                  </h5>
                  <div className="flex items-center justify-end gap-[22px]">
                    <div className="w-[90px] sm:w-[120px] h-12 sm:h-[56px] flex items-center justify-center rounded-[5px] border-[1px] border-borderFaq gap-3 sm:gap-5">
                      <span className="cursor-pointer">
                        <Image src={minusIcon} alt="minusIcon" />
                      </span>

                      <span className="text-xl font-medium leading-[30px] text-secondary">
                        2
                      </span>
                      <span className="cursor-pointer">
                        <Image src={plusIcon} alt="minusIcon" />
                      </span>
                    </div>
                    <button className="w-12 sm:w-[60px] h-12 sm:h-[56px] flex items-center justify-center rounded-[5px] border-[1px] border-borderFaq">
                      <Image src={deleteItem} alt="deleteItem" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCheckout;
