import { productDetails } from "@/data/productDetails";

const ProductDetails = () => {
  return (
    <div className="mt-20 border-[1px] border-border">
      <div className="pl-14 h-[76px] border-[1px] border-border bg-bgProductDetails flex items-center">
        <h3 className="h3 text-secondary">
          Producr details of LED Monitor With High Quality In The World
        </h3>
      </div>
      <div className="px-14 pt-6 pb-8 border-b-[1px] border-border bg-white">
        {productDetails.map((items, index) => {
          return (
            <>
              <div key={index}>
                <h4 className="prduct_details_title text-blackPrimary">
                  {items.title}
                </h4>
                <div className="pt-6 pl-3 grid lg:grid-cols-2">
                  <div>
                    <ul className="list-disc list-inside text-lg leading-[34px] text-blackPrimary">
                      {items.content.slice(0, 6).map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc list-inside lg:list-outside text-lg leading-[34px] text-blackPrimary">
                      {items.content.slice(6).map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="px-14 pt-6 pb-8 bg-white">
        {productDetails.map((items, index) => {
          return (
            <>
              <div key={index}>
                <h4 className="prduct_details_title text-blackPrimary">
                  {items.titletwo}
                </h4>
                <div className="pt-6">
                  {items.contenttwo.slice(0, 1).map((list, index) => (
                    <h5 className="details_pra text-blackPrimary" key={index}>{list}</h5>
                  ))}
                </div>
                <div className="pt-12">
                  {items.contenttwo.slice(1, ).map((list, index) => (
                    <h5 className="details_pra text-blackPrimary" key={index}>{list}</h5>
                  ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
