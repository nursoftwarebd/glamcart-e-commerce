import { featuredProducts } from "@/data/featuredProducts";
import { flashProducts } from "@/data/flashProducts";
import { products } from "@/data/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  items: featuredProducts,
  allProductsItem: products,
  flashProducts: flashProducts,
  totalQuantity: 0,
  totalPrice: 0,
};

// Load cart and wishlist from localStorage if available
const storedCart = localStorage.getItem("cart");

if (storedCart) {
  initialState.cart = JSON.parse(storedCart);
}

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
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
      const itemIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      // state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
