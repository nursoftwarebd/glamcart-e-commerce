import Title from "./Title";

const OurFeature = () => {
  return (
    <div className="pt-16">
      <div className="container_fluid">
        <Title
          heading="Feature"
          sebHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <div className="mt-9 px-[100px] py-10 bg-white shadow-md border-[1px] grid grid-cols-4"></div>
      </div>
    </div>
  );
};

export default OurFeature;
