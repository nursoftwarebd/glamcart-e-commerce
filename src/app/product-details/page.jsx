import AboutProduct from "@/components/screen/ProductDetails/AboutProduct";
import CustomerReview from "@/components/screen/ProductDetails/CustomerReview";
import ProductDetails from "@/components/screen/ProductDetails/ProductDetails";
import SliderProduct from "@/components/screen/ProductDetails/SliderProduct";

const page = () => {
  return (
    <section className="pt-10 pb-13  bg-backgroundPage">
      <div className="container_fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="border border-red-600 h-fit">
            <SliderProduct />
          </div>
          <div>
            <AboutProduct />
          </div>
        </div>
        {/* product details */}
        <div>
          <ProductDetails />
          <CustomerReview />
        </div>
      </div>
    </section>
  );
};

export default page;
