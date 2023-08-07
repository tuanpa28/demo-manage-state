import productApi, { productReducer } from "@/api/product";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
