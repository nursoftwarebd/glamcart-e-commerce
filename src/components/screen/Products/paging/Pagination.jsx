import Image from "next/image";
import next from "../../../../assets/icons/next.svg";
import previous from "../../../../assets/icons/previous.svg";

const Pagination = () => {
  return (
    <>
      <div className="flex items-center gap-5">
        <button className="h-[50px] py-3 pr-6 pl-3 bg-white/60 border-[1px] border-grayBorder rounded-[5px] flex items-center justify-center gap-3">
          <Image
            src={previous}
            alt="previous"
            className="w-4 h-4 object-fill"
          />
          <span className="text-lg text-secondary font-semibold leading-6 ">
            Previous
          </span>
        </button>

        <div className="h-[50px] bg-white/60 border-[1px] border-grayBorder rounded-[5px] flex">
          <button className="w-[60px] h-full bg-secondary text-white flex items-center justify-center rounded-tl-[5px] rounded-bl-[5px] border-r-[1px]">
            <span className="text-lg  font-semibold leading-6">1</span>
          </button>
          <button className="w-[50px] h-full bg-white text-primary  flex items-center justify-center rounded-tl-[5px] rounded-bl-[5px] border-r-[1px]">
            <span className="text-lg  font-semibold leading-6">2</span>
          </button>
          <button className="w-[60px] h-full bg-white text-primary  flex items-center justify-center rounded-tl-[5px] rounded-bl-[5px]">
            <span className="text-lg  font-semibold leading-6">3</span>
          </button>
        </div>
        <button className="h-[50px] py-3 pr-3 pl-6 bg-white/60 border-[1px] border-grayBorder rounded-[5px] flex items-center justify-center gap-3">
          <span className="text-lg text-secondary font-semibold leading-6 ">
            Next
          </span>
          <Image src={next} alt="next" className="w-4 h-4 object-fill" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
