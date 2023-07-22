/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FETCH_PENDING,
  FETCH_FULFILLED,
  FETCH_REJECTED,
  DELETE_CAR,
  SET_ISLOADING,
} from "./constants";

export const apiPending = (payload?: any) => ({
  type: FETCH_PENDING,
  payload,
});
export const apiFulfilled = (payload: any) => ({
  type: FETCH_FULFILLED,
  payload,
});
export const apiRejected = (payload?: any) => ({
  type: FETCH_REJECTED,
  payload,
});
export const deleteCar = (payload: any) => ({
  type: DELETE_CAR,
  payload,
});
export const setIsLoading = (payload: any) => ({
  type: SET_ISLOADING,
  payload,
});
