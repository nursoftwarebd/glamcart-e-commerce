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
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        // Create a new object with quantity property
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(newItem);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          console.log("Price:", price, "Quantity:", quantity); // Log price and quantity
          const itemTotal = price * quantity;
          console.log("Item total:", itemTotal); // Log item total
          if (!isNaN(itemTotal)) {
            // Check if itemTotal is not NaN
            cartTotal.totalPrice += itemTotal;
          } else {
            console.error("Item total is NaN:", cartItem); // Log item if itemTotal is NaN
          }
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      console.log("Total price before:", totalPrice); // Log total price before
      if (!isNaN(totalPrice)) {
        // Check if totalPrice is not NaN
        state.totalPrice = parseInt(totalPrice.toFixed(2));
      } else {
        console.error("Total price is NaN"); // Log if totalPrice is NaN
      }
      console.log("Total price after:", state.totalPrice); // Log total price after
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
