import { pause } from "@/utils/pause";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      getProducts: builder.query<IProduct[], void>({
        query: () => {
          return { url: "/products", method: "GET" };
        },
      }),
      addProduct: builder.mutation<IProduct, Partial<IProduct>>({
        query: (product) => {
          return {
            url: "/products",
            method: "POST",
            body: product,
          };
        },
      }),
      updateProduct: builder.mutation<IProduct, Partial<IProduct>>({
        query: (product) => {
          return {
            url: `/products/${product.id}`,
            method: "PATCH",
            body: product,
          };
        },
      }),
      removeProduct: builder.mutation<void, number>({
        query: (id) => {
          return {
            url: `/products/${id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useRemoveProductMutation,
  useUpdateProductMutation,
} = productApi;
export const productReducer = productApi.reducer;

export default productApi;
