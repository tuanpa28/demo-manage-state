import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
} as { items: any[] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      console.log(action);

      const existProductIndex = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (existProductIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items[existProductIndex].quantity++;
      }
    },

    increase(state, action) {
      state.items.find((item) => item.id == action.payload).quantity++;
    },
    decrease(state, action) {
      const product = state.items.find((item) => item.id == action.payload);
      product.quantity--;
      if (product.quantity < 1) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm)
          state.items = state.items.filter((item) => item.id !== product.id);
        product.quantity = 1;
      }
    },
  },
});

export const { addCart, increase, decrease } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
