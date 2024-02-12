const Title = ({ heading, sebHeading }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-heading30 xl:text-heading44 text-blackPrimary leading-[66px] font-semibold">
          {heading}
        </h1>
        <h4 className="max-w-[584px] leading-6 text-black/60">{sebHeading}</h4>
      </div>
    </div>
  );
};

export default Title;
