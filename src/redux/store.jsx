import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";
import loadingReducer from "./slices/LoadingSlice";
import productReducer from "./slices/ProductsSlice";

const store = configureStore({
  reducer: {
    allCarts: cartSlice,
    allWishlist: wishListSlice,
    loading: loadingReducer,
    products: productReducer
  },
});
export default store;
