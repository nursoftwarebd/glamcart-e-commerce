"use client";
import Checkbox from "@/components/common/Checkbox";
import {
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import plusIcon from "../../../assets/icons/+.svg";
import minusIcon from "../../../assets/icons/-.svg";
import { default as deleteItem } from "../../../assets/icons/delete.svg";
import warning from "../../../assets/icons/warning.svg";
import CheckOrder from "./CheckOrder";

const CardCheckout = () => {
  const { cart, totalQuantity, totalPrice, selectedItems } = useSelector(
    (state) => state.allCarts
  );

  const dispatch = useDispatch();

  dispatch(getCartTotal());

  return (
    <section>
      <div className="flex flex-col xl:flex-row xl:justify-between gap-7">
        <div className="w-full 2xl:max-w-[937px]">
          {cart.length === 0 ? (
            <div className="  ">
              <div className="pt-8">
                <div className="p-8 h-10 bg-warningColo w-full flex items-center gap-3">
                  <Image src={warning} alt="warning" />
                  <p>You have no items in your Cart</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((data) => (
                <div
                  key={data.id}
                  className="w-full py-7 pl-7 pr-12 bg-white flex items-center gap-10"
                >
                  <Checkbox />
                  <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <Image
                        src={data.image}
                        alt={`checkout ${data.title}`}
                        className="w-[100px] h-[100px] sm:h-[130px] sm:w-[130px] rounded-[5px]"
                      />
                      <div className="space-y-2 sm:space-y-5">
                        <h4 className="text-sm sm:text-lg text-blackPrimary font-medium leading-5 sm:leading-[27px]">
                          {data.title}
                        </h4>
                        <h3 className="text-base sm:text-xl font-semibold leading-5 sm:leading-[30px] text-secondary">
                          ৳{data.price}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-5 sm:space-y-11">
                      <h5 className="text-base sm:text-lg text-start sm:text-end leading-[27px] text-blackGray">
                        Sku {data.sku}
                      </h5>
                      <div className="flex items-center justify-end gap-[22px]">
                        <div className="w-[90px] sm:w-[120px] h-12 sm:h-[56px] flex items-center justify-center rounded-[5px] border-[1px] border-borderFaq gap-3 sm:gap-5">
                          <span
                            onClick={() =>
                              dispatch(decreaseItemQuantity(data.id))
                            }
                            className="cursor-pointer"
                          >
                            <Image src={minusIcon} alt="minusIcon" />
                          </span>

                          <span className="text-xl font-medium leading-[30px] text-secondary">
                            {data.quantity}
                          </span>
                          <span
                            onClick={() =>
                              dispatch(increaseItemQuantity(data.id))
                            }
                            className="cursor-pointer"
                          >
                            <Image src={plusIcon} alt="plusIcon" />
                          </span>
                        </div>
                        <button
                          onClick={() => dispatch(removeItem(data.id))}
                          className="w-12 sm:w-[60px] h-12 sm:h-[56px] flex items-center justify-center rounded-[5px] border-[1px] border-borderFaq"
                        >
                          <Image src={deleteItem} alt="deleteItem" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <CheckOrder />
      </div>
    </section>
  );
};

export default CardCheckout;
