import { productFeaturesData } from "@/data/productFeaturesData";
const ProductFeatures = ({ product }) => {
  return (
    <div className="pt-5">
      <div>
        <p className="text-lg leading-[30px] text-blackPrimary">
          {product.description}
        </p>
        <ul className="list-disc list-inside pt-3 pl-3 text-lg leading-9 text-blackPrimary">
          {product.features.map((list, index) => (
            <li key={index}> {list} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
