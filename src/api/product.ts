import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const productApi = createApi({
  reducerPath: "product",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    // Set token vào header
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", "Bearer xxx");
      }
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getProducts: builder.query<IProduct[], void>({
        query: () => "/products",
        providesTags: ["Product"],
      }),
      addProduct: builder.mutation<IProduct, Partial<IProduct>>({
        query: (product) => {
          return {
            url: "/products",
            method: "POST",
            body: product,
          };
        },
        invalidatesTags: ["Product"],
      }),
      updateProduct: builder.mutation<IProduct, Partial<IProduct>>({
        query: (product) => {
          return {
            url: `/products/${product.id}`,
            method: "PATCH",
            body: product,
          };
        },
        invalidatesTags: ["Product"],
      }),
      removeProduct: builder.mutation<void, number>({
        query: (id) => {
          return {
            url: `/products/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["Product"],
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
