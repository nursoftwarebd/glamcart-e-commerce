import AllProducts from "@/components/screen/Products/AllProducts";
import ProductSidebar from "@/components/screen/Products/ProductSidebar";
import SelectDropDown from "@/components/screen/Products/SelectDropDown";

export const metadata = {
  title: "Glamcart - Products Page",
  description: "Generated by Nur IT Software LTD.",
};

const page = async() => {
  return (
    <section className="pt-10  bg-backgroundPage">
      <div className="container_fluid">
        <div className="flex gap-9 2xl:gap-14">
          <div className="hidden lg:block w-[300px]">
            <ProductSidebar />
          </div>
          <div className="w-full pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
              <p className="text-lg leading-7 text-black/50 font-medium">
                Showing <span className="text-black">20</span> of
                <span className="text-black"> 160</span> product
              </p>
              <div className="flex items-center gap-3">
                <p className="text-lg text-black/50 leading-7">Sort by:</p>
                <SelectDropDown/>
              </div>
            </div>

            <AllProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
