import { contactData } from "@/data/contactData";
import Image from "next/image";
import localPhone from "../../../assets/icons/local_phone.svg";
import locationon from "../../../assets/icons/location_on.svg";
import mail from "../../../assets/icons/mail.svg";

const OurOffice = () => {
  return (
    <div className="sticky top-0 w-full lg:max-w-[416px] h-fit">
      <h3 className="text-xl sm:text-2xl font-semibold leading-[48px] text-contactLabel">
        Our Office
      </h3>
      <div className="mt-[14px] py-[30px] pl-[15px] pr-7 w-full  bg-white rounded-lg border-[1px] border-grayForm/60">
        {contactData.map((contactData) => {
          return (
            <div key={contactData.id} className="space-y-5">
              <div className="flex items-start gap-3">
                <Image src={locationon} alt="location_on" />
                <div>
                  <h5 className="font-medium text-contactLabel leading-6">
                    Head Office
                  </h5>
                  <p className="pt-2 font-dmSans  text-sm text-textBody leading-4">
                    {contactData.headOffice}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={mail} alt="mail" />
                <div>
                  <h5 className="font-medium text-contactLabel leading-6">
                    Our Email
                  </h5>
                  <p className="pt-2 font-dmSans  text-sm text-textBody leading-4">
                    {contactData.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={localPhone} alt="local_phone" />
                <div>
                  <h5 className="font-medium text-contactLabel leading-6">
                    Call Center
                  </h5>
                  <p className="pt-2 font-dmSans  text-sm text-textBody leading-4">
                    {contactData.callCenter}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurOffice;
