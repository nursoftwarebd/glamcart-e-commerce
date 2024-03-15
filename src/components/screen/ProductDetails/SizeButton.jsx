const SizeButton = ({ product }) => {
  return (
    <div className="py-8 flex items-center gap-4">
      <p className="text-paragraph1 leading-7 text-blackPrimary">Size</p>
      {product.sizes.map((size) => (
        <button className="size_button hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeButton;
