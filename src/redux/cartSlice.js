import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    products: [],
    show: false,
  },
  reducers: {
    fullData: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...newItem, amount: 1 });
      }

      // state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log("popopooo", action.payload, action.payload.id, state.items);
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    increaseAmount: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.amount += 1;
      }
    },
    decreaseAmount: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.amount > 1) {
        existingItem.amount -= 1;
      }
    },
    showCart: (state) => {
      state.show = !state.show;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  showCart,
  fullData,
  increaseAmount,
  decreaseAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
