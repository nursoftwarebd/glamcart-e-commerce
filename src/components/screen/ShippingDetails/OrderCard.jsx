"use client";
import { paymentMethodData } from "@/data/paymentMethodData";
import { getCartTotal } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderCard = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const { cart, totalQuantity, quantity, totalPrice, selectedItems } =
    useSelector((state) => state.allcarts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleCheckboxChange = (paymentId) => {
    setSelectedPayment(paymentId);
  };
  const handleTitleClick = (event, paymentId) => {
    event.stopPropagation();
    setSelectedPayment(paymentId);
  };

  return (
    <div className="w-full xl:w-[380px]  p-7 bg-white rounded-[5px]">
      <h5 className="text-xl text-blackPrimary font-medium leading-[30px]">
        My Orders
      </h5>
      <div className="py-7.5 border-b-[1.73px] border-lightGrayBlue space-y-3">
        {cart.map((cartItem) => (
          <div key={cartItem.id} className="flex justify-between">
            <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
              {cartItem.title}
            </p>
            <div>
              <div className="flex items-center text-xl  leading-[30px] text-lineThrough gap-3">
                <span>{cartItem.quantity}x</span>
                <span className="font-medium text-blackPrimary w-[85px]  text-right">
                  ৳{cartItem.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-7 pb-5 border-b-[1.73px] border-lightGrayBlue space-y-3">
        <div className="flex items-center justify-between">
          <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
            Subtotal
          </p>
          <div>
            <h5 className="flex items-center text-xl  leading-[30px] text-lineThrough gap-3">
              <span className="font-medium text-blackPrimary">
                ৳{totalPrice}
              </span>
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
            Free Shipping
          </p>
          <div>
            <h5 className="flex items-center text-xl  leading-[30px] text-lineThrough gap-3">
              {/* <span>1x</span> */}
              <span className="font-medium text-blackPrimary">৳0</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="py-7.5 border-b-[1.73px] border-lightGrayBlue flex items-center justify-between">
        <h5 className="text-lg text-blackPrimary font-medium leading-[27px]">
          Order Total
        </h5>
        <h3 className="text-xl md:text-heading28 text-secondary font-semibold leading-[42px]">
          ৳{totalPrice}
        </h3>
      </div>
      <div className="py-7">
        <h4 className="pb-4 text-xl text-black3D font-medium leading-[30px] tracking-[2%]">
          Payment Methods
        </h4>
        <div className="space-y-4">
          {paymentMethodData.map((paymentMethod) => (
            <div
              key={paymentMethod.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center cursor-pointer"
                      htmlFor={`checkbox-${paymentMethod.id}`}
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${paymentMethod.id}`}
                        checked={selectedPayment === paymentMethod.id}
                        onChange={() => handleCheckboxChange(paymentMethod.id)}
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border-[2px] border-[#133f6e] checked:border-secondary  checked:bg-secondary hover:before:opacity-10"
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <p
                  onClick={(e) => handleTitleClick(e, paymentMethod.id)}
                  className="cursor-pointer leading-6 text-grayView tracking-[2%]"
                >
                  {paymentMethod.policyName}
                </p>
              </div>
              <Image
                src={paymentMethod.logo}
                alt={`payment logo ${paymentMethod.policyName}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button className="w-full sm:w-[380px] h-[56.28px] bg-secondary rounded-[5px]">
          <span className="text-xl text-backgroundNav font-semibold leading-[30px]">
            PLACE ORDER
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
