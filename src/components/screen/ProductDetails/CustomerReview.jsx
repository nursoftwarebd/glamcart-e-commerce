import Image from "next/image";
import five_star from "../../../assets/icons/five_star.svg";

const CustomerReview = () => {
  return (
    <div className="pt-7.5 bg-white">
      <div className="pl-14 pt-10 pb-9 flex items-center gap-[74px]">
        <div className="space-y-5">
            <h5 className="text-black3D font-medium text-xl leading-[30px]">Customer reviews</h5>
            <div className="flex items-center gap-2">
               <Image src={five_star} alt="five_star" />
               <p className="text-black3D text-sm leading-6">4.6 out of 5</p>
            </div>
        </div>
        <div className=' space-y-[3px]'>
                        <div className=' flex items-center gap-2'>
                            <p className='text-[14px] leading-[21px] text-[#3d3d3d]'>5 stars</p>
                            <div className=' w-[200px] h-[8px] rounded-[5px] bg-[#FFB340]'></div>
                            <p className='text-[14px] leading-[21px] text-[#3d3d3d]'>79%</p>
                        </div>
                        
                    </div>
      </div>
    </div>
  );
};

export default CustomerReview;
