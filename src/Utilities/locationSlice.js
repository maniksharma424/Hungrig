import { createSlice } from "@reduxjs/toolkit";

const loactionSlice = createSlice({
  name: "location",
  initialState: {
    address: {},
  },
  reducers: {
    setLocation: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setLocation } = loactionSlice.actions;
export default loactionSlice.reducer;
