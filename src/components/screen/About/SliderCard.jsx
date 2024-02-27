import Image from "next/image";

const SliderCard = ({ cData }) => {
  return (
    <div className="w-full  h-auto rounded-[10px] bg-white py-7 pl-6 space-y-8">
      <div className="flex items-center gap-2">
        <Image src={cData.star} alt="cData.star" />
        <Image src={cData.star} alt="cData.star" />
        <Image src={cData.star} alt="cData.star" />
        <Image src={cData.star} alt="cData.star" />
        <Image src={cData.star} alt="slider_star" />
      </div>
      <div className="pr-6">
        <p className="leading-6">{cData.comment}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-clientBlack text-lg leading-7">
            {cData.name}
          </h4>
          <p className="text-sm leading-5 text-clientBlack">{cData.post}</p>
        </div>
        <div className="pr-9">
          <div className="w-[54px] h-[54px]">
            <Image
              src={cData.cImage}
              alt="customer"
              className="w-full h-full object-fill rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
