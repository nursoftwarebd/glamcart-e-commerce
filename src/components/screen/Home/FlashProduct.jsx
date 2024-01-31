import Image from "next/image";
import basket from "../../../assets/icons/basket.svg";
import starcolor from "../../../assets/icons/star-color.svg";
import star from "../../../assets/icons/star.svg";
import flashone from "../../../assets/images/home/flashtwo.png";

const FlashProduct = () => {
  return (
    <div>
      <div className="bg-white border-[1px] border-grayBorder px-[9px] pt-2 pb-[15px] rounded-[10px]">
        <div className="w-full h-[313px] flex items-end bg-imageBack rounded-[10px] relative">
          <Image src={flashone} alt="flash-one" className=" object-fill" />
          <div className="absolute top-0 left-0 w-[91px] h-[30px] rounded-tl-[9px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px] bg-gradient-to-r from-[#FF7A00]  to-[#FFB800] px-[5px] flex items-center justify-center">
              <p className="text-sm text-white font-semibold">-25% OFF</p>
          </div>
        </div>
         {/* card details */}
        <div className="pt-[15px] pl-[5px] space-y-[10px]">
          {/* star */}
          <div className="flex items-center gap-[7px]">
            <div className="flex items-center">
              <Image src={starcolor} alt="star-color" className="object-fill" />
              <Image src={starcolor} alt="star-color" className="object-fill" />
              <Image src={starcolor} alt="star-color" className="object-fill" />
              <Image src={starcolor} alt="star-color" className="object-fill" />
              <Image src={star} alt="star" className="object-fill" />
            </div>
            <span className=" text-xs text-blackPrimary">(0)</span>
          </div>
          <h5 className="h5 text-blackSec">Headrest Executive Mesh Office Chair set</h5>
          <div className="flex items-center justify-between pr-[11px]">
            <h4 className="h4 text-primary">৳10500</h4>
            {/* ::: cart :::: */}
            <button className="w-[24px] h-[21px] ">
              <Image src={basket} alt="basket" className="w-full h-full object-fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashProduct;
