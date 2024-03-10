import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";
import loadingReducer from "./slices/LoadingSlice";

const store = configureStore({
  reducer: {
    allCarts: cartSlice,
    allWishlist: wishListSlice,
    loading: loadingReducer,
  },
});
export default store;
