import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    allcarts: cartSlice,
  },
});
export default store;
