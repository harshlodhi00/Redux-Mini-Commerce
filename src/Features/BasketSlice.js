import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  total: 0,
};

const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
});

export const {} = BasketSlice.actions;

export default BasketSlice.reducer;
