import Image from "next/image";
import Link from "next/link";
import checkstar from "../../../assets/icons/check-star.svg";
import loveass from "../../../assets/icons/love_ass.svg";
import bstar from "../../../assets/icons/star.svg";
import tick from "../../../assets/icons/tick.svg";

const StarAndWishlist = () => {
  return (
    <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
      <div className="flex items-center pr-0 sm:pr-4 sm:border-r-[2px] border-imageBack">
        <span className="font-medium text-lg text-blackPrimary leading-7">
          4.0
        </span>
        <div className="px-1 flex items-center gap-[1px]">
          <Image
            src={checkstar}
            alt="check-star"
            className="w-6 h-6 object-fill"
          />
          <Image
            src={checkstar}
            alt="check-star"
            className="w-6 h-6 object-fill"
          />
          <Image
            src={checkstar}
            alt="check-star"
            className="w-6 h-6 object-fill"
          />
          <Image
            src={checkstar}
            alt="check-star"
            className="w-6 h-6 object-fill"
          />
          <Image src={bstar} alt="check-star" className="w-6 h-6 object-fill" />
        </div>
        <span className="text-lg text-grayPrice leading-5">(223)</span>
      </div>
      <div className="flex items-center pr-0 sm:px-4 sm:border-r-[2px] border-imageBack gap-2">
        <Image src={tick} alt="tick" className="w-[21px] h-[15px]" />
        <p className="font-semibold text-lg leading-7 text-blackPrimary">
          4,320 <span className="font-normal">Sold</span>
        </p>
      </div>
      <div className="flex items-center pl-0 sm:pl-4">
        <Image src={loveass} alt="love_ass" className="w-[22px] h-[19px]" />
        <Link
          href={"#"}
          className="pl-4 text-lg leading-5 font-bold text-secondary"
        >
          Add to wishlist
        </Link>
      </div>
    </div>
  );
};

export default StarAndWishlist;
