import { IAction, IState } from "@/interfaces/Store";
import {
  FETCH_PENDING,
  FETCH_FULFILLED,
  FETCH_REJECTED,
  DELETE_CAR,
  SET_ISLOADING,
} from "./constants";

const initState = {
  cars: [],
  isLoading: false,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: IState, action: IAction): any => {
  switch (action.type) {
    case FETCH_PENDING: {
      state.isLoading = action.payload;
      return state;
    }
    case FETCH_FULFILLED: {
      state.isLoading = false;
      state.cars = action.payload;
      return state;
    }
    case FETCH_REJECTED: {
      (state.isLoading = false), (state.error = action.payload);
      return state;
    }
    case DELETE_CAR: {
      state.cars = state.cars.filter((car) => car.id !== +action.payload);
      return state;
    }
    case SET_ISLOADING: {
      state.isLoading = action.payload;
      return state;
    }
    default:
      throw new Error("Invalid Action!");
  }
};

export { initState };
export default reducer;
