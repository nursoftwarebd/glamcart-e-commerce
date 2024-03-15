import Image from "next/image";
import downarrow from "../../../assets/icons/downarrow.svg";

const DownArrow = ({ onClick }) => {
  return (
    <div
      className=" absolute  bottom-[-30px] left-[30%]  sm:left-[40%] z-20 "
      onClick={onClick}
    >
      <div className="w-8 h-8 cursor-pointer">
        <Image
          src={downarrow}
          alt="downarrow"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default DownArrow;
