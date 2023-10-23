import { configureStore } from "@reduxjs/toolkit";
import BasketSliceReducer from "../Features/BasketSlice";

export const store = configureStore({
  reducer: {
    BasketSliceReducer,
  },
});
