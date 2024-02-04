import Image from 'next/image';
import downarrow from "../../../assets/icons/downarrow.svg";

const DownArrow = ({onClick}) => {
  return (
    <div className=' absolute  bottom-[-30px]  left-[40%] z-20 ' onClick={onClick}>
       <div className='w-4 h-4'>
         <Image src={downarrow} alt='downarrow' className='w-full h-full object-fill' />
       </div>
    </div>
  );
};

export default DownArrow;