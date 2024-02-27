import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import closedeye from "../../assets/icons/closed.png";
import facebook from "../../assets/icons/fb.svg";
import google from "../../assets/icons/google.svg";
import logCross from "../../assets/icons/login_cross.svg";
import openeye from "../../assets/icons/open.svg";
import loginpic from "../../assets/images/login/bro.svg";

const SignUpModal = ({ isSingIn, setSignModal }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [conPasswordVisible, setConPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConPasswordVisibility = () => {
    setConPasswordVisible(!conPasswordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConPasswordChange = (e) => {
    setConPassword(e.target.value);
  };
  return (
    <div
      className="backdrop flex bg-black bg-opacity-50 justify-center items-center overflow-x-hidden 
  overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none"
    >
      <div className="sm:w-[580px] md:w-[680px] lg:w-[850px] xl:w-[972px] h-auto rounded-[24px]">
        <div className="grid md:grid-cols-2">
          <div className="rounded-tl-[24px] hidden md:block bg-blueLogIn  rounded-bl-[24px] px-11 xl:px-[84px] md:pt-[76px] md:pb-1 xl:pt-[50px] xl:pb-[35px] x1xl:pt-[65px] x1xl:pb-[76px] x1440:pb-[65px]">
            <h3 className="text-xl xl:text-heading28 font-semibold xl:leading-[42px] tracking-[3%] text-white">
              Create Account
            </h3>
            <p className="pt-4 text-base xl:text-lg font-medium leading-[27px] text-white">
              Sign up with your mobile number or email to get started
            </p>
            <div className="pt-0 lg:pt-2 xl:pt-[22px]">
              <Image
                src={loginpic}
                alt="loginpic"
                className=" w-full md:h-[300px] xl:h-[280px] x1xl:h-[300px] 2xl:h-full  object-fill"
              />
            </div>
          </div>
          <div className=" w-[320px] sm:w-full backdrop-blur-md bg-white/40 rounded-tl-[24px] md:rounded-tl-[0px] rounded-bl-[24px] md:rounded-bl-[0px] rounded-tr-[24px] rounded-br-[24px]">
            <div className="bg-gradient-to-r from-[#003387]/[20%] to-white/[20%] rounded-tl-[24px] md:rounded-tl-[0px] rounded-bl-[24px] md:rounded-bl-[0px]  w-full rounded-tr-[24px] rounded-br-[24px] ">
              <div className="flex justify-end">
                <button
                  className="pt-1 lg:pt-2 xl:pt-[5px] pr-[10px]"
                  onClick={() => setSignModal(!isSingIn)}
                >
                  <Image src={logCross} alt="logCross" />
                </button>
              </div>
              <div className="px-2 sm:px-10 md:px-5 lg:px-10 xl:px-8 x1xl:px-[60px] x1440:px-[40px] py-1 sm:py-3 md:py-1 lg:py-1 xl:pt-0 xl:pb-[5px] x1xl:pt-[10px] x1xl:pb-[25px] x1440:pt-[20px] x1440:pb-[50px]  ">
                <form className="space-y-3 x1xl:space-y-5 x1440:space-y-3">
                  <h3 className="text-base lg:text-lg 2xl:text-2xl text-indigoText font-medium lg:leading-9">
                    Create your Project Nirvoya Account
                  </h3>
                  <input
                    placeholder="Full name"
                    type="text"
                    className="w-full h-10 bg-white p-2 border border-borderLog/70 outline-none placeholder:text-sm placeholder:leading-5 placeholder:text-grayEdit/70"
                  />
                  <input
                    placeholder="Enter Email or Mobile number"
                    type="text"
                    className="w-full h-10 bg-white p-2 border border-borderLog/70 outline-none placeholder:text-sm placeholder:leading-5 placeholder:text-grayEdit/70"
                  />
                  <div className="flex items-center justify-between w-full h-10 bg-white p-2 border border-borderLog/70">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter Password"
                      className="w-[85%] outline-none placeholder:text-sm placeholder:leading-5 placeholder:text-grayEdit/70"
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                      {passwordVisible ? (
                        <Image
                          src={openeye}
                          alt="openeye"
                          className="w-6 h-6"
                        />
                      ) : (
                        <Image
                          src={closedeye}
                          alt="closedeye"
                          className="w-6 h-6 mix-blend-multiply object-center"
                        />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between w-full h-10 bg-white p-2 border border-borderLog/70">
                    <input
                      type={conPasswordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      value={conPassword}
                      onChange={handleConPasswordChange}
                      placeholder="Confirm Password"
                      className="w-[85%] outline-none placeholder:text-sm placeholder:leading-5 placeholder:text-grayEdit/70"
                    />
                    <button type="button" onClick={toggleConPasswordVisibility}>
                      {conPasswordVisible ? (
                        <Image
                          src={openeye}
                          alt="openeye"
                          className="w-6 h-6"
                        />
                      ) : (
                        <Image
                          src={closedeye}
                          alt="closedeye"
                          className="w-6 h-6 mix-blend-multiply object-center"
                        />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="flex items-center  text-sm text-grayView leading-[21px] gap-1">
                      I agree to Project Nirvoya
                      <span>
                        <Link href={"#"} className="text-secondary">
                          terms & conditions
                        </Link>
                      </span>
                    </div>
                  </div>
                  <button className="w-full h-10 rounded-sm flex items-center justify-center bg-secondary">
                    <span className="font-medium text-white leading-6">
                      Create Account
                    </span>
                  </button>
                </form>
                <div className="py-[10px] flex items-center justify-center">
                  <div className="w-[215px] flex items-center">
                    <div className="w-[93px] h-[1px] bg-white/90"></div>
                    <p className="px-2 text-sm text-textJnt leading-5 font-openSans">
                      or
                    </p>
                    <div className="w-[93px] h-[1px] bg-white/90"></div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-2">
                  <Link
                    href={"#"}
                    className="w-1/2 h-10 bg-transparent border-[1.5px] border-white/70 rounded-[40px] flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <Image src={google} alt="google" />
                      <span className="text-sm text-indigoText font-medium leading-[21px]">
                        Google
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={"#"}
                    className="w-1/2 h-10 bg-transparent border-[1.5px] border-white/70 rounded-[40px] flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <Image src={facebook} alt="Facebook" />
                      <span className="text-sm text-indigoText font-medium leading-[21px]">
                        Facebook
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="pt-4 2xl:pt-10">
                  <p className="text-sm leading-[21px] text-grayView">
                    Already member?
                    <span>
                      <Link href={"#"} className="text-secondary">
                        Login here
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
