import ProductCard from "@/components/screen/ProductCard";
import ProductSidebar from "@/components/screen/Products/ProductSidebar";
import Pagination from "@/components/screen/Products/paging/Pagination";
import { products } from "@/data/products";
const page = () => {
  return (
    <>
      <div className="pt-10  bg-backgroundPage">
        <div className="container_fluid">
          <div className="flex gap-9 2xl:gap-14">
            <div className="w-[300px]">
              <ProductSidebar />
            </div>
            <div className="w-full pt-6">
              <div className="flex items-center justify-between">
                <p className="text-lg leading-7 text-black/50 font-medium">Showing <span className="text-black">20</span> of <span className="text-black">160</span> product</p>
                 <div className="flex items-center gap-3">
                 <p className="text-lg text-black/50 leading-7">Sort by:</p>
                    <div className="border-[1.2px] border-grayBorder rounded-[3px] px-4 py-[7px]">
                       
                         <select  name=""  id="" className="bg-transparent outline-none text-black text-lg ">
                            <option value="" selected>Newest Items</option>
                            <option value="">Newest Items1</option>
                            <option value="">Newest Items</option>
                         </select>
                    </div>
                 </div>
              </div>
              <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.slice(0,12).map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
               <div className="flex items-center justify-end pt-10 pb-13">
               <Pagination  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
