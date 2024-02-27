import { featuredProducts } from "@/data/featuredProducts";
import { flashProducts } from "@/data/flashProducts";
import { products } from "@/data/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  items: featuredProducts,
  allProductsItem: products,
  flashProducts: flashProducts,
};

// Load cart and wishlist from localStorage if available

// const storedWishlist = localStorage.getItem("wishlist");

// if (storedWishlist) {
//   initialState.wishList = JSON.parse(storedWishlist);
// }
if (typeof window !== "undefined") {
  const storedWishlist = localStorage.getItem("wishlist");

  if (storedWishlist) {
    initialState.wishList = JSON.parse(storedWishlist);
  }
}

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      let find = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.wishList[find].quantity += 1;
      } else {
        // Create a new object with quantity property
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.wishList.push(newItem);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },

    // removeWishListItem: (state, action) => {
    //   state.wishList = state.wishList.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
    removeWishListItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.wishList = state.wishList.filter(
        (item) => item.id !== itemIdToRemove
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
  },
});

export const { removeWishListItem, addToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
