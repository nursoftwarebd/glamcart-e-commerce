import Image from "next/image";
import slider_star from "../../../assets/icons/slider_star.svg";
import customer from "../../../assets/images/aboutUs/client.png";

const SliderCard = () => {
  return (
    <div className="w-full  h-auto rounded-[10px] bg-white shadow-lg py-7 pl-6 space-y-8">
      <div className="flex items-center gap-2">
        <Image src={slider_star} alt="slider_star" />
        <Image src={slider_star} alt="slider_star" />
        <Image src={slider_star} alt="slider_star" />
        <Image src={slider_star} alt="slider_star" />
        <Image src={slider_star} alt="slider_star" />
      </div>
      <div className="pr-6">
        <p className="leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend urna
          sed nunc, dignissim mauris, a consectetur amet. Ut quam mattis enim
          gravida sem. Euismod fermentum.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-clientBlack text-lg leading-7">
            Jubaedah
          </h4>
          <p className="text-sm leading-5 text-clientBlack">Customer</p>
        </div>
        <div className="pr-9">
          <div className="w-[54px] h-[54px]">
            <Image
              src={customer}
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
