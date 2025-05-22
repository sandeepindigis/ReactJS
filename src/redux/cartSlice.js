import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state) => {
      state.item.pop(action.payload);
    },
    clearCard: (state) => {
      state.item.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCard } = cartSlice.actions;
export default cartSlice.reducer;
