import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state?.items?.map((item) => {
        if (item.restaurant.id === action.payload.restaurant.id) {

                console.log('same res called');


        } else {
          //ask to create new basket
          if (window.confirm("Start a fresh cart")) {
            state = [];
            state.push(action.payload);
          } else {
            return null;
          }
        }
      });
    },

    removeFromCart: (state, action) => {
      state.items.pop(action.payload);
    },
  },
  clearCart: (state) => {
    state.items = [];
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
