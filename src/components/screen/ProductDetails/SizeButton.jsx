const SizeButton = () => {
  return (
    <div className="py-8 flex items-center gap-4">
      <p className="text-paragraph1 leading-7 text-blackPrimary">Size</p>
      <button className="size_button">S</button>
      <button className="size_button">M</button>
      <button className="size_button !bg-primary !text-white">L</button>
      <button className="size_button">Xl</button>
      <button className="size_button">XXl</button>
    </div>
  );
};

export default SizeButton;
