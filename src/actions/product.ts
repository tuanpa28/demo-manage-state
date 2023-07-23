import { instance } from "@/axios/config";
import { pause } from "@/utils/pause";

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: "product/fetching" }); // isloading true
  try {
    await pause(1000);
    const { data } = await instance.get(`/products`);

    dispatch({ type: "product/fetchingSuccess", payload: data });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};

export const addProduct = (product: any) => async (dispatch: any) => {
  try {
    const data = await instance.post(`/products`, product);
    dispatch({ type: "product/addProduct", payload: data });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};
export const removeProduct = (id: any) => async (dispatch: any) => {
  try {
    await instance.delete(`/products/${id}`);
    dispatch({ type: "product/deleteProduct", payload: id });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};
export const updateProduct = (product: any) => async (dispatch: any) => {
  try {
    const data = await instance.put(`/products/${product.id}`, product);
    dispatch({ type: "product/updateProduct", payload: data });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};
