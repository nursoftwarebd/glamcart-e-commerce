import { getCartTotal } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const CheckOrder = () => {
  const { cart, totalQuantity, totalPrice, selectedItems } = useSelector(
    (state) => state.allCarts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div className="sticky top-0 w-full sm:w-[439px] h-fit px-7.5 pt-7.5 pb-13 bg-white rounded-[5px]">
      <h4 className="text-xl font-medium leading-[30px] text-blackPrimary">
        My Orders
      </h4>
      <div className="py-7 space-y-3 border-b-[1.73px] border-lightGrayBlue">
        <div className="flex items-center justify-between">
          <p className="text-lg leading-[26px] text-lineThrough">Subtotal</p>
          <h4 className="text-xl font-medium leading-[30px] text-blackPrimary">
            ৳{totalPrice}
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg leading-[26px] text-lineThrough">
            Total Quantity
          </p>
          <h4 className="text-xl font-medium leading-[30px] text-blackPrimary">
            {totalQuantity}
          </h4>
        </div>
      </div>
      <div className="pt-6 pb-7.5 flex items-center justify-between">
        <p className="text-lg font-medium leading-[27px] text-blackPrimary">
          Order Total
        </p>
        <h3 className="text-xl 2xl:text-heading28 leading-[42px] font-semibold text-secondary">
          ৳{totalPrice}
        </h3>
      </div>
      <Link
        href={"/shipping-details"}
        className="w-full 2xl:w-[380px] h-14 px-1 2xl:px-0 rounded bg-secondary flex items-center justify-center"
      >
        <span className="text-xl text-backgroundNav leading-[30px] font-semibold">
          Proceed to Checkout
        </span>
      </Link>
    </div>
  );
};

export default CheckOrder;
