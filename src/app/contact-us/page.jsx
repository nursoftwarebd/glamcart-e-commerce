const ContactUsPage = () => {
  return (
    <>
      <section className="py-13  bg-backgroundPage">
        <div className="container_fluid">
          <div className="max-w-[1144px] border border-red-700">
            <div>
              <h2 className="text-heading42 font-semibold leading-[88px] text-blackPrimary">
                Get connect with us
              </h2>
              <p className="pt-2 leading-[27px] text-textBody max-w-[888px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="pt-10 flex gap-8 xl:gap-[120px]">
              <div className="max-w-[608px] border border-red-600">
                <form action="#" className="space-y-6">
                  <div className="space-y-3 flex flex-col">
                    <label
                      htmlFor=""
                      className="font-medium leading-6 text-contactLabel"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full xl:w-[607px] h-10 px-4 py-3 bg-white rounded-[5px] border-[1px] border-borderContact/50"
                    />
                  </div>
                </form>
              </div>
              <div className="max-w-[416px] border border-red-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                vero, atque, nam ipsum enim vel ullam natus cum corporis nulla
                adipisci at dignissimos ipsa nihil soluta, beatae voluptas.
                Odio, tenetur?
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
