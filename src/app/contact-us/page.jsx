import { contactData } from "@/data/contactData";
import Image from "next/image";
import localPhone from "../../assets/icons/local_phone.svg";
import locationon from "../../assets/icons/location_on.svg";
import mail from "../../assets/icons/mail.svg";
const ContactUsPage = () => {
  return (
    <>
      <section className="py-13  bg-backgroundPage">
        <div className="container_fluid">
          <div className="w-full xl:max-w-[1144px]">
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
            <div className="pt-10 flex flex-col md:flex-row gap-8 xl:gap-[110px]">
              <div className="w-full xl:max-w-[608px]">
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
                      placeholder="Your First Name"
                      className="w-full xl:w-[607px] h-10 px-4 py-3 bg-white rounded-[5px] border-[1px] border-borderContact/50 outline-none placeholder:text-grayFaq placeholder:text-sm placeholder:leading-4"
                    />
                  </div>
                  <div className="space-y-3 flex flex-col">
                    <label
                      htmlFor=""
                      className="font-medium leading-6 text-contactLabel"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Last Name"
                      className="w-full xl:w-[607px] h-10 px-4 py-3 bg-white rounded-[5px] border-[1px] border-borderContact/50 outline-none placeholder:text-grayFaq placeholder:text-sm placeholder:leading-4"
                    />
                  </div>
                  <div className="space-y-3 flex flex-col">
                    <label
                      htmlFor=""
                      className="font-medium leading-6 text-contactLabel"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full xl:w-[607px] h-10 px-4 py-3 bg-white rounded-[5px] border-[1px] border-borderContact/50 outline-none placeholder:text-grayFaq placeholder:text-sm placeholder:leading-4"
                    />
                  </div>
                  <div className="space-y-3 flex flex-col">
                    <label
                      htmlFor=""
                      className="font-medium leading-6 text-contactLabel"
                    >
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Write Your Message"
                      className="w-full xl:w-[607px] px-4 py-3 bg-white rounded-[5px] border-[1px] border-borderContact/50 outline-none placeholder:text-grayFaq placeholder:text-sm placeholder:leading-4"
                    ></textarea>
                  </div>
                  <button className="w-[190px] h-10 rounded-[3px] bg-secondary flex items-center justify-center">
                    <span className="font-medium leading-6 text-white">
                      Send Messages
                    </span>
                  </button>
                </form>
              </div>
              <div className="w-full lg:max-w-[416px] h-fit">
                <h3 className="text-2xl font-semibold leading-[48px] text-contactLabel">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
