import { IAction, IState } from "@/interfaces/Store";
import { createContext, Dispatch } from "react";
import { initState } from "./reducer";

const Context = createContext<[IState, Dispatch<IAction>]>([
  initState,
  () => null,
]);

export default Context;
