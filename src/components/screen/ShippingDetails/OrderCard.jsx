"use client";
import { getCartTotal } from "@/redux/slices/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentMethod from "./PaymentMethod";

const OrderCard = () => {
  const { cart, totalQuantity, quantity, totalPrice, selectedItems } =
    useSelector((state) => state.allCarts);
  const dispatch = useDispatch();
  dispatch(getCartTotal());

  console.log(cart);
  return (
    <div className="w-full xl:w-[380px]  p-7 bg-white rounded-[5px]">
      <h5 className="text-xl text-blackPrimary font-medium leading-[30px]">
        My Orders
      </h5>
      <div className="py-7.5 border-b-[1.73px] border-lightGrayBlue space-y-3">
        {cart.map((cartItem) => (
          <div key={cartItem.id} className="flex justify-between">
            <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
              {cartItem.productName}
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
      <PaymentMethod />
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
