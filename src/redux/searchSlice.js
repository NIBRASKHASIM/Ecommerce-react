import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "cart",
  initialState: {
    searchInput: "",
  },
  reducers: {
    searchTerm: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { searchTerm } = searchSlice.actions;
export default searchSlice.reducer;
