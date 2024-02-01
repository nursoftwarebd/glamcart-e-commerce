import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { featuredProducts } from "@/data/featuredProducts";
import FeaturedProduct from "./FeaturedProduct";

const Featured = () => {
  return (
    <section className="pt-13 pb-10 bg-backgroundPage">
      <div className="container_fluid">
        {/* title */}
        <SectionTitle heading={"Featured Product"} href={"/featured-product"} />

        {/* featured products */}
        <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredProducts.map((feproducts, index) => (
            <FeaturedProduct key={index} feproducts={feproducts} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
