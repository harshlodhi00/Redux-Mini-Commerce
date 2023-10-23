import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  total: 0,
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const updatedPayload = { ...action.payload, quantity: 1 };
      state.products.push(updatedPayload);
      state.amount += 1;
      state.total += action.payload.price;
    },
    increseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id == action.payload);

      item.quantity++;
    },
    decreseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id == action.payload);
      item.quantity--;
    },
  },
});

export const { addItemToCart, increseQuantity, decreseQuantity } =
  BasketSlice.actions;

export default BasketSlice.reducer;
