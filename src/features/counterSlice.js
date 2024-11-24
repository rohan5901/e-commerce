// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Redux Toolkit uses Immer under the hood to allow direct state mutations
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // action.payload contains the value passed when dispatching
    },
  },
});

// Export actions to use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer to add to the store
export default counterSlice.reducer;
