"use client";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/screen/ProductCard";

const MyWishlistPage = () => {
  const { wishList } = useSelector((state) => state.allcarts);
  return (
    <div className="bg-white shadow-md">
      <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
        <h4 className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
          My Wishlist
        </h4>
      </div>
      <div className="bg-white shadow-md pt-8 pb-11 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {wishList.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWishlistPage;
