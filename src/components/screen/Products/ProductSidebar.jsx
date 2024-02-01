
const ProductSidebar = () => {
  return (
    <div className="bg-white py-7 w-[300px]">
       <div className="px-5 pb-6 border-b-[2px] border-borderSide">
           <p className=" font-medium text-lg text-black3D">Related Categories</p>
           <ol className="list-disc list-inside capitalize">
             <li className="text-grayView leading-6">Men’s fashion</li>
             
           </ol>
          <ul className="pl-8 capitalize">
            <li className="text-primary leading-6">Men’s Jacket</li>
            <li className="text-grayView leading-6">Men's T-Shirts</li>
            <li className="text-grayView leading-6">Casual Shirts</li>
            <li className="text-grayView leading-6">Summer T-Shirts</li>
          </ul>
       </div>
    </div>
  );
};

export default ProductSidebar;