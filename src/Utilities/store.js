import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import locationSlice from "./locationSlice";

const store = configureStore({
reducer:{
    cart:cartSlice,
    location:locationSlice
}
})
export default store