"use client";

import Checkbox from "@/components/common/Checkbox";
import Dropdown from "@/components/common/Dropdown";

const ShippingForm = () => {
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
    <div className="w-full  2xl:w-[920px]">
      <div className="bg-white shadow-md">
        <div className="py-4 px-7 sm:px-[38px] border-borderAccount border-b-[.75px] flex items-center justify-between">
          <h3 className="font-rajdhani text-accountBlack text-heading30 leading-6 tracking-[2%] font-semibold">
            Shipping Details
          </h3>
        </div>
        <div className="px-7 sm:px-[38px] pt-5 pb-13">
          <form action="#" className="w-full">
            <div className="space-y-5">
              <h5 className="form_title">Contact Information</h5>
              <div className="space-y-5">
                <div className="w-full flex flex-col sm:flex-row items-center gap-y-5 gap-x-10">
                  <div className="w-full sm:w-1/2 space-y-3 flex flex-col">
                    <label htmlFor="" className="address_form_label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="w-full h-[45px] lg:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 space-y-3 flex flex-col">
                    <label htmlFor="" className="address_form_label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="w-full h-[45px] lg:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center gap-y-5 gap-x-10">
                  <div className="w-full sm:w-1/2 space-y-3 flex flex-col">
                    <label htmlFor="" className="address_form_label">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      className="w-full h-[45px] lg:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                    />
                  </div>
                  <div className="w-full sm:w-1/2  space-y-3 flex flex-col">
                    <label htmlFor="" className="address_form_label">
                      MOBILE NUMBER <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-[45px] lg:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
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
                <div className="w-full flex flex-col sm:flex-row items-center gap-y-5 gap-x-10">
                  <div className="w-full sm:w-1/2 space-y-3 flex flex-col">
                    <label htmlFor="" className="address_form_label">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <Dropdown options={options1} select="Select Country" />
                  </div>
                  <div className="w-full sm:w-1/2 space-y-3 flex flex-col">
                    <label htmlFor="" className="address_form_label">
                      City/Area <span className="text-red-500">*</span>
                    </label>
                    <Dropdown options={options2} select="Select City or Area" />
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center gap-y-5 gap-x-10">
                  <div className="w-full sm:w-1/2 space-y-3 flex flex-col">
                    <label htmlFor="" className="address_form_label">
                      Select at district, state of province
                    </label>
                    <input
                      type="email"
                      className="w-full h-[45px] xl:w-[400px] px-4 py-3 outline-none bg-backgroundPage rounded-[2px] border-[1px] border-grayBorderForm"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 space-y-3 flex flex-col">
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
              <div></div>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <Checkbox />
              <p className="text-lg leading-5 text-blackPrimary">
                Add to address book
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
