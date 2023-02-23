import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {

    addItem: (state, action) => {
      // check cart is empty or not
      if (state?.items[0]) {
        // check is item from same restaurant
        if (state?.items[0]?.restaurant?.id === action.payload.restaurant?.id) {
          const existingItemIndex = state.items.findIndex(
            (item) => item.dish.id === action.payload.dish.id
          );
          if (existingItemIndex !== -1) {
            state.items[existingItemIndex].qty += 1;
          } else state?.items?.push(action.payload);
        } else {
          if (window.confirm("Start a fresh cart")) {
            state.items = [];
            state?.items?.push(action.payload);
          } else {
            return ;
          }
        }
      } else state?.items?.push(action.payload);
    },


    removeItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.dish.id === action.payload.dish.id
      );
      if (state.items[existingItemIndex].qty <= 1) {
        state?.items?.splice(existingItemIndex, 1);
      } else state.items[existingItemIndex].qty -= 1;
    },
  },
});



export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
