// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer, // Add the product reducer
  },
});

export default store;
