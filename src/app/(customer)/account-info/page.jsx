import AccountInfo from "@/components/screen/MyAccount/AccountInfo";
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
        <AccountInfo />
      </div>
    </div>
  );
};

export default AccountInformation;
