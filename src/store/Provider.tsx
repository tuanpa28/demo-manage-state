import Context from "./Context";
import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import { produce } from "immer";

interface IProvider {
  children: React.ReactNode;
}

const Provider = ({ children }: IProvider) => {
  const [state, dispatch] = useReducer(produce(reducer), initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
