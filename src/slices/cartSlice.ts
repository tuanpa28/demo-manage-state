import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
} as { items: any[] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<any>) {
      const existProductIndex = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (existProductIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items[existProductIndex].quantity++;
      }
    },

    increase(state, action: PayloadAction<number>) {
      state.items.find((item) => item.id == action.payload).quantity++;
    },
    decrease(state, action: PayloadAction<number>) {
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
