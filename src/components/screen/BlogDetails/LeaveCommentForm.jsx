const LeaveCommentForm = () => {
  return (
    <div className="mt-10">
      <h4 className="text-2xl font-semibold  text-blackSec leading-9 ">
        Leave a Comment
      </h4>
      <form action="#" className="mt-8 w-full lg:w-[950px]">
        <div className="flex flex-col space-y-4">
          <label htmlFor="" className="text-lg text-blackSec leading-[27px]">
            Comment <span className="text-fadeRed">*</span>
          </label>
          <textarea
            name=""
            id=""
            rows="5"
            className="w-full p-4 bg-white bg-opacity-50 border-[1px] border-oldGray/50 outline-none"
          ></textarea>
        </div>
        <div className="pt-8 w-full flex flex-col lg:flex-row items-center gap-[50px]">
          <div className="w-full lg:w-1/2 space-y-4 flex flex-col">
            <label htmlFor="" className="text-lg text-blackSec leading-[27px]">
              Name <span className="text-fadeRed">*</span>
            </label>
            <input
              type="text"
              className="w-full h-[60px] lg:w-[450px] px-4 py-3 outline-none bg-white bg-opacity-50 border-[1px] border-oldGray/50"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4 flex flex-col">
            <label htmlFor="" className="text-lg text-blackSec leading-[27px]">
              Email <span className="text-fadeRed">*</span>
            </label>
            <input
              type="email"
              className="w-full h-[60px] lg:w-[450px] px-4 py-3 outline-none bg-white bg-opacity-50 border-[1px] border-oldGray/50"
            />
          </div>
        </div>
        <div className="pt-7 flex items-center justify-end">
          <button className="w-[180px] h-[60px] p-4 bg-secondary flex items-center justify-center">
            <span className="text-lg font-medium leading-[27px] text-white ">
              Submit
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveCommentForm;
