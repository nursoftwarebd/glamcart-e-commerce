const SizeButton = ({ product, setSizeValue, sizeValue }) => {
  return (
    <div className="py-8 flex items-center gap-4">
      <p className="text-paragraph1 leading-7 text-blackPrimary">Size</p>
      {product.sizes.map((size, idx) => (
        <button
          onClick={() => setSizeValue(size)}
          key={idx}
          className={`hover:bg-primary ${
            sizeValue === size && "bg-primary text-white"
          } hover:text-white text-center border-2 border-gray-200 cursor-pointer hover:border-transparent outline-none px-2`}
        >
          {" "}
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeButton;
