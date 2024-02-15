"use client";
import Image from "next/image";
import uparrow from "../../../assets/icons/uparrow.svg";

const UpArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[-30px] left-[30%] sm:left-[40%] z-20 "
      onClick={onClick}
    >
      <div className="w-4 h-4">
        <Image
          src={uparrow}
          alt="downarrow"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default UpArrow;
