import { featuredProducts } from "@/data/featuredProducts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  items: featuredProducts,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
