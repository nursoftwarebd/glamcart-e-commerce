import { productFeaturesData } from "@/data/productFeaturesData";
const ProductFeatures = () => {
  return (
    <div className="pt-5">
      {productFeaturesData.map((data, index) => (
        <div key={index}>
          <p className="text-lg leading-[30px] text-blackPrimary">
            {data.title}
          </p>
          <ul className="list-disc list-inside pt-3 pl-3 text-lg leading-9 text-blackPrimary">
            {data.content.map((list, index) => (
              <li key={index}> {list} </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;
