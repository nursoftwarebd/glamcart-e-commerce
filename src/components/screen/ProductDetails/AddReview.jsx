const AddReview = () => {
  return (
    <div className="pl-14 pt-18 pb-15 max-w-[745px] space-y-8">
      <div className="space-y-6">
        <h4 className="text-blackSec font-semibold text-2xl leading-9">
          Add Your Review
        </h4>
        <p className="text-lg text-oldGray leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <form action="#" className="space-y-8">
        <div className="space-y-5">
          <label htmlFor="" className="text-lg leading-[27px] text-blackSec">
            Name *
          </label>
          <input
            type="text"
            className="w-full h-[60px] bg-backgroundPage rounded-[5px] border-[1px] border-oldGray outline-none px-2 lg:px-5"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="" className="text-lg leading-[27px] text-blackSec">
            Email *
          </label>
          <input
            type="email"
            className="w-full h-[60px] bg-backgroundPage rounded-[5px] border-[1px] border-oldGray outline-none px-2 lg:px-5"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="" className="text-lg leading-[27px] text-blackSec">
            Review *
          </label>
          <textarea
            name=""
            id=""
            rows="6"
            className="w-full bg-backgroundPage rounded-[5px] border-[1px] border-oldGray outline-none p-2 lg:p-5"
          ></textarea>
        </div>
        <div>Rating</div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
