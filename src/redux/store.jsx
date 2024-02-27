import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";

const store = configureStore({
  reducer: {
    allcarts: cartSlice,
    allWishlist: wishListSlice,
  },
});
export default store;
