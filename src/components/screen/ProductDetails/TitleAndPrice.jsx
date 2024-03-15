import Image from "next/image";
import checkfill from "../../../assets/icons/checkfill.svg";
import StarAndWishlist from "./StarAndWishlist";
import DiscountPrice from "../../../../lib/DiscountPrice";

const TitleAndPrice = ({ product }) => {
  return (
    <div className="border-b-[1px] border-border pb-5">
      <h3 className=" font-medium text-xl sm:text-heading2 leading-7 sm:leading-10 text-blackPrimary">
        {product.productName}
      </h3>
      <StarAndWishlist product={product} />
      <div className="pt-8 flex items-center gap-6">
        <h2 className="text-2xl sm:text-4xl leading-[54px] font-semibold text-secondary">
        ৳{product.price}
        </h2>
        {product.discount !== undefined && (
          <div className="flex items-center gap-4">
            <p className="line-through text-lg sm:text-xl leading-[30px] text-lineThrough">
              {/* //discount price */}
              <DiscountPrice
                price={product.price}
                discountPercentage={product.discount}
              />
            </p>
            <div className="w-[38px] h-7 sm:w-[48px] sm:h-[30px] bg-gradient-to-r from-[#FF7A00] to-[#FFB800] rounded-[2px]  flex items-center justify-center">
              <p className="text-white text-xs sm:text-sm font-semibold leading-5">
                -{product.discount}%
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="pt-1 sm:pt-3 flex items-center gap-4">
        <p className="leading-6 text-black3D font-medium">
          SKU: <span className="text-grayView font-normal">{product.SKU}</span>
        </p>
        <div className="flex items-center gap-1">
          {/* <Image src={checkfill} alt="checkfill" className="w-4 h-4" /> */}
          <span className={`w-4 h-4 ${product.quantity >= 1 ? "bg-green-600":"bg-red-500"} rounded-full`}></span>
          <p className="text-grayView leading-6">{product.quantity >= 1 ? "In Stock ":"Stock out"}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleAndPrice;
