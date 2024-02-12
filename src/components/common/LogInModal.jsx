import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import closedeye from "../../assets/icons/closed.png";
import logCross from "../../assets/icons/login_cross.svg";
import openeye from "../../assets/icons/open.svg";

const LogInModal = ({ openModal, setOpenModal }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div
      className="backdrop flex bg-black bg-opacity-50 justify-center items-center overflow-x-hidden 
  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="w-[972px] h-auto rounded-[24px]">
        <div className="grid grid-cols-2">
          <div className="bg-blueLogIn rounded-tl-[24px] rounded-bl-[24px] px-[84px] py-[100px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            voluptas possimus id ut vero a voluptates rem nihil harum culpa,
            velit dignissimos dolore laudantium. Quasi quisquam sed optio!
            Repellat, quam.
          </div>
          <div className="bg-green-600 bg-gradient-to-r from-[#003387]/[20%] to-white/[20%] w-full rounded-tr-[24px] rounded-br-[24px]">
            <div className="flex justify-end">
              <button
                className="pt-[10px] pr-[10px]"
                onClick={() => setOpenModal(!openModal)}
              >
                <Image src={logCross} alt="logCross" />
              </button>
            </div>
            <form className="px-[60px] pt-[60px] pb-[132px] space-y-5">
              <h3 className="text-2xl text-indigoText font-medium leading-9">
                Welcome to Project Nirvoya! Please login.
              </h3>
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
                    <Image src={openeye} alt="openeye" className="w-6 h-6" />
                  ) : (
                    <Image
                      src={closedeye}
                      alt="closedeye"
                      className="w-6 h-6 mix-blend-multiply object-center"
                    />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-end">
                <Link href={"#"} className="text-sm text-grayView">
                  Forgot password?
                </Link>
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
