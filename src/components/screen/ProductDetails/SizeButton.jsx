const SizeButton = ({ product, setSizeValue }) => {
  return (
    <div className="py-8 flex items-center gap-4">
      <p className="text-paragraph1 leading-7 text-blackPrimary">Size</p>
      {product.sizes.map((size, idx) => (
        <input
        onClick={()=>setSizeValue(size)}
          type="text"
          readOnly
          key={idx}
          className="hover:bg-primary hover:text-white w-[2.5rem] h-[2.5rem] text-center border-2 border-gray-200 cursor-pointer hover:border-none outline-none px-2"
          value={size}
        />
      ))}
    </div>
  );
};

export default SizeButton;
