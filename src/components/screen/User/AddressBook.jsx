import Dropdown from "@/components/common/Dropdown";

const AddressBook = () => {
  const options1 = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const options2 = [
    { value: "A", label: "Option 5" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
  ];
  return (
    <div className="bg-white shadow-md">
      <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
        <h4 className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
          Address Book
        </h4>
      </div>
      <div className="px-5 pt-8 pb-9">
        <form action="#" className="w-full xl:w-[840px]">
          <div className="space-y-5">
            <h5 className="form_title">Contact Information</h5>
            <div className="space-y-5">
              <div className="w-full flex items-center gap-10">
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                  />
                </div>
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-10">
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                  />
                </div>
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    MOBILE NUMBER <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7 space-y-5">
            <h5 className="form_title">Shipping Address</h5>
            <div className="space-y-5">
              <div className="space-y-3 flex flex-col">
                <label htmlFor="" className="address_form_label">
                  Address Line 1 <span className="text-starRed">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-[45px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                />
              </div>
              <div className="space-y-3 flex flex-col">
                <label htmlFor="" className="address_form_label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  className="w-full h-[45px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                />
              </div>
            </div>
            <div className="space-y-5">
              <div className="w-full flex items-center gap-10">
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <Dropdown options={options1} select="Select Country" />
                </div>
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    City/Area <span className="text-red-500">*</span>
                  </label>
                  <Dropdown options={options2} select="Select City or Area" />
                </div>
              </div>
              <div className="w-full flex items-center gap-10">
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    Select at district, state of province
                  </label>
                  <input
                    type="email"
                    className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                  />
                </div>
                <div className="space-y-3 flex flex-col">
                  <label htmlFor="" className="address_form_label">
                    Postal Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7 flex items-center gap-6">
            <button className="w-auto xl:w-[180px] h-11 px-[30px] py-[10px] bg-secondary rounded-sm">
              <span className="font-medium leading-6 tracking-[2%] text-white uppercase">
                Save Address
              </span>
            </button>
            <button className="w-auto xl:w-[180px] h-11 px-[30px] py-[10px] border-[1.5px] border-borderButton bg-gradient-to-r from-[#E6E7EC]/[32.5%] via-[#E9EAED]/[24%] to-[#E7E9EE]/[28.5%] rounded-sm">
              <span className="font-medium leading-6 tracking-[2%] text-graRate uppercase">
                cancel
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressBook;
