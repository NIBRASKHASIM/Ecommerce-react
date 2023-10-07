import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    show: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log("popopooo", action.payload, action.payload.id, state.items);
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    showCart: (state) => {
      state.show = !state.show;
    },
  },
});

export const { addToCart, removeFromCart, showCart } = cartSlice.actions;
export default cartSlice.reducer;
