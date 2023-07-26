import { cartReducer } from "@/slices/cartSlice";
import { counterReducer } from "@/slices/counterSlice";
import { productReducer } from "@/slices/productSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
