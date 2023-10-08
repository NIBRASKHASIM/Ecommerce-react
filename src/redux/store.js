import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import serachReducer from "./searchSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: serachReducer,
  },
});
