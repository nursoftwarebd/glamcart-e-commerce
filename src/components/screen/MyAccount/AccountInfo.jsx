import { accountInfo } from "@/data/accountInfo";
const AccountInfo = () => {
  return (
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
              <h5 className="text-blackPrimary leading-6">{info.address}</h5>
            </div>
            <div className="space-y-[5px]">
              <span className="text-grayEdit leading-6 uppercase">
                Select at district, state of province
              </span>
              <h5 className="text-blackPrimary leading-6">{info.district}</h5>
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
              <span className="text-grayEdit leading-6 uppercase">COUNTRY</span>
              <h5 className="text-blackPrimary leading-6">{info.country}</h5>
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
  );
};

export default AccountInfo;
