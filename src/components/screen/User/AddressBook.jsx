const AddressBook = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
        <h4 className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
          Address Book
        </h4>
      </div>
      <div className="px-5 pt-8 pb-9 xl:w-[840px]">
        <form action="#">
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
        </form>
      </div>
    </div>
  );
};

export default AddressBook;
