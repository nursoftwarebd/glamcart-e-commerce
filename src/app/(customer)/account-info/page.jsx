import { accountInfo } from "@/data/accountInfo";
import Image from "next/image";
import edit from "../../../assets/icons/edit.svg";

const AccountInformation = () => {
  return (
    <div>
      <div className="bg-white shadow-md">
        <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
          <h4 className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
            Account Information
          </h4>
          <button className="flex items-center gap-1">
            <Image src={edit} alt="edit" />
            <span className="text-grayEdit leading-6 tracking-[2%]">Edit</span>
          </button>
        </div>
        <div className="px-5 pt-6.5 pb-[30px]">
          {accountInfo.map((info) => (
            <div
              key={info.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-start gap-y-5 sm:gap-y-0 gap-[100px] xl:gap-[200px]"
            >
              <div className="space-y-6">
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6 uppercase">
                    First Name
                  </span>
                  <h5 className="text-blackPrimary leading-6 capitalize">
                    {info.firstName}
                  </h5>
                </div>
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6">Email Address</span>
                  <h5 className="text-blackPrimary leading-6">{info.email}</h5>
                </div>
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6 uppercase">
                    Address Line
                  </span>
                  <h5 className="text-blackPrimary leading-6">
                    {info.address}
                  </h5>
                </div>
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6 uppercase">
                    Select at district, state of province
                  </span>
                  <h5 className="text-blackPrimary leading-6">
                    {info.district}
                  </h5>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6 capitalize">
                    Last Name
                  </span>
                  <h5 className="text-blackPrimary leading-6 capitalize">
                    {info.lastName}
                  </h5>
                </div>
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6 capitalize">
                    Mobile Number
                  </span>
                  <h5 className="text-blackPrimary leading-6">{info.mobile}</h5>
                </div>
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6 uppercase">
                    COUNTRY
                  </span>
                  <h5 className="text-blackPrimary leading-6">
                    {info.country}
                  </h5>
                </div>
                <div className="space-y-[5px]">
                  <span className="text-grayEdit leading-6  uppercase">
                    City/Area
                  </span>
                  <h5 className="text-blackPrimary leading-6">{info.city}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
