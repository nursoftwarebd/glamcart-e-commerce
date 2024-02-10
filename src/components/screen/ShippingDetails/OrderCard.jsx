import RoundedCheckbox from "@/components/common/RoundedCheckbox";

const OrderCard = () => {
  return (
    <div className="w-full xl:w-[439px] 2xl:w-[439px] border border-red-500 p-7 bg-white rounded-[5px]">
      <h5 className="text-xl text-blackPrimary font-medium leading-[30px]">
        My Orders
      </h5>
      <div className="py-7.5 border-b-[1.73px] border-lightGrayBlue space-y-3">
        <div className="flex items-center justify-between">
          <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
            LED Monitor With High Quality In The World
          </p>
          <div>
            <h5 className="flex items-center text-xl  leading-[30px] text-lineThrough gap-3">
              <span>1X</span>
              <span className="font-medium text-blackPrimary">৳976.33</span>
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
            Magic Pen for iPad
          </p>
          <div>
            <h5 className="flex items-center text-xl  leading-[30px] text-lineThrough gap-3">
              <span>1X</span>
              <span className="font-medium text-blackPrimary">৳976.33</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="pt-7 pb-5 border-b-[1.73px] border-lightGrayBlue space-y-3">
        <div className="flex items-center justify-between">
          <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
            Subtotal
          </p>
          <div>
            <h5 className="flex items-center text-xl  leading-[30px] text-lineThrough gap-3">
              <span>1X</span>
              <span className="font-medium text-blackPrimary">৳968.56</span>
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="max-w-[203px] text-lg text-lineThrough leading-[26px]">
            Free Shipping
          </p>
          <div>
            <h5 className="flex items-center text-xl  leading-[30px] text-lineThrough gap-3">
              <span>1X</span>
              <span className="font-medium text-blackPrimary">৳0</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="py-7.5 border-b-[1.73px] border-lightGrayBlue flex items-center justify-between">
        <h5 className="text-lg text-blackPrimary font-medium leading-[27px]">
          Order Total
        </h5>
        <h3 className="text-heading28 text-secondary font-semibold leading-[42px]">
          ৳1,956.66
        </h3>
      </div>
      <div className="py-7">
        <p className="p-6">Payment Methods</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <RoundedCheckbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
