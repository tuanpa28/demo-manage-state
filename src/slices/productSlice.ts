import { instance } from "@/axios/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
} as {
  products: any[];
  isLoading: boolean;
  error: string;
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const { data } = await instance.get(`/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: any) => {
    try {
      const { data } = await instance.post(`/products`, product);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: any) => {
    try {
      const { data } = await instance.patch(`/products/${product.id}`, product);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const removeProduct = createAsyncThunk(
  "product/fetchProducts",
  async (id: any) => {
    try {
      await instance.delete(`/products/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      }),
      builder
        .addCase(addProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
          state.products.push(action.payload);
          state.isLoading = false;
        })
        .addCase(addProduct.rejected, (state) => {
          state.isLoading = false;
        }),
      builder
        .addCase(updateProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateProduct.fulfilled, (state, action: any) => {
          const product = action.payload;
          state.products = state.products.map((item: any) =>
            item.id === product.id ? product : item
          );
          state.isLoading = false;
        })
        .addCase(updateProduct.rejected, (state) => {
          state.isLoading = false;
        });
    builder
      .addCase(removeProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProduct.fulfilled, (state, action: any) => {
        const id = action.payload;
        state.products = state.products.filter((item: any) => item.id !== id);
        state.isLoading = false;
      })
      .addCase(removeProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const productReducer = productSlice.reducer;
