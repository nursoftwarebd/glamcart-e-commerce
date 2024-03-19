import { createSlice } from "@reduxjs/toolkit";
import { allProduct } from "../../lib/ProductsData";
const initialState = {
  featuredProducts: [],
  AllProducts: [],
  loading: false,
  error: null,
  flashDeals: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(allProduct.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.AllProducts = action.payload;
      state.featuredProducts = action.payload.filter((item) => item.featured);
      state.loading = false;
      state.error = null;
      // state.currentProducts = action.payload.slice(0,12);
      state.flashDeals = action.payload.filter(
        (item) => item.discount !== undefined
      );
      // console.log(state.flashDeals)
    });
    builder.addCase(allProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;

export const { setShowMore, setShowLess } = productSlice.actions;
