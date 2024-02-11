import Image from "next/image";
import arrowPage from "../../../assets/icons/arrowPage.svg";
import arrowRight from "../../../assets/icons/arrowRight.svg";
import threeDots from "../../../assets/icons/threedots.svg";

const BlogPaginations = () => {
  return (
    <div className="pt-13 flex items-center justify-center">
      <div className="flex items-center gap-[14px]">
        <button className="w-12 h-[35.25px] flex items-center justify-center border-[.5px] rounded-sm border-grayBorderPage bg-white">
          <Image src={arrowPage} alt="arrowPage" />
        </button>
        <button className="w-[41px] h-[35px] flex items-center justify-center border-[.5px] rounded-sm  border-grayBorderPage bg-primary text-white">
          <span className="text-lg leading-[27px] font-medium">1</span>
        </button>
        <button className="w-[41px] h-[35px] flex items-center justify-center border-[.5px] rounded-sm  border-grayBorderPage bg-white text-grayView">
          <span className="text-lg leading-[27px] font-medium">2</span>
        </button>
        <button className="w-[41px] h-[35px] flex items-center justify-center border-[.5px] rounded-sm  border-grayBorderPage bg-white text-grayView">
          <span className="text-lg leading-[27px] font-medium">3</span>
        </button>
        <Image src={threeDots} alt="threeDots" />
        <button className="w-[41px] h-[35px] flex items-center justify-center border-[.5px] rounded-sm  border-grayBorderPage bg-white text-grayView">
          <span className="text-lg leading-[27px] font-medium">12</span>
        </button>
        <button className="w-[41px] h-[35px] flex items-center justify-center border-[.5px] rounded-sm  border-grayBorderPage bg-white text-grayView">
          <span className="text-lg leading-[27px] font-medium">13</span>
        </button>
        <button className="w-[41px] h-[35px] flex items-center justify-center border-[.5px] rounded-sm  border-grayBorderPage bg-white text-grayView">
          <span className="text-lg leading-[27px] font-medium">14</span>
        </button>
        <button className="w-[39px] h-[35px] flex items-center justify-center border-[.5px] rounded-sm  border-grayBorderPage bg-white text-grayView">
          <Image src={arrowRight} alt="arrowRight" />
        </button>
      </div>
    </div>
  );
};

export default BlogPaginations;
