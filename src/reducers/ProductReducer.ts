import { produce } from "immer";

const initState = {
  products: [],
  isLoading: false,
  error: "",
} as { products: any[]; isLoading: boolean; error: string };

const productReducer = (state = initState, action: any) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      // FETCHING
      case "product/fetching":
        draftState.isLoading = true;
        break;
      case "product/fetchingSuccess":
        draftState.products = action.payload;
        break;
      case "product/fetchingFailed":
        draftState.error = action.payload;
        break;
      case "product/fetchingFinally":
        draftState.isLoading = false;
        break;

      // ADD
      case "product/addProduct":
        draftState.products.push(action.payload);
        break;
      case "product/updateProduct":
        draftState.products = state.products.map((item: any) =>
          item.id === action.payload.id ? action.payload : item
        );

        break;
      case "product/deleteProduct":
        draftState.products = state.products.filter(
          (item: any) => item.id !== action.payload
        );
        break;

      default:
        return state;
    }
  });
};

export default productReducer;
