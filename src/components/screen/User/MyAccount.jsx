import Image from "next/image";
import edit from "../../../assets/icons/edit.svg";

const MyAccount = () => {
  return (
    <div>
      <div className="py-3 px-5 border-b-2 flex items-center justify-between">
        <p className=" font-rajdhani text-xl leading-6 tracking-[2%] font-semibold">
          Personal Information
        </p>
        <button className="flex items-center gap-1">
          <Image src={edit} alt="edit" />
          <span className="text-grayEdit leading-6 tracking-[2%]">Edit</span>
        </button>
      </div>
      <div className="px-5 py-6.5">
        <form action="#" className="flex items-center gap-[200px]">
          <div>
            <div className="">
              <span htmlFor="">First Name</span>
              <input type="text" placeholder="Md. Khan" />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Md. Khan" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
