import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    allcarts: cartSlice,
  },
});
export default store;
