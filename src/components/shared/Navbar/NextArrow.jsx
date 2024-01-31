'use client'
import Image from 'next/image';
import right from "../../../assets/icons/right.svg";

const NextArrow = ({onClick}) => {
  return (
    <div className=' absolute right-[-30px] top-[3px] ' onClick={onClick}>
       <Image src={right} alt='right-icon' className='w-4 h-4' />
    </div>
  );
};

export default NextArrow;