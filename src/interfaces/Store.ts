import { ICar } from "./Car";

export interface IState {
  cars: ICar[];
  isLoading: boolean;
  error: null | string;
}

export interface IAction {
  type: string;
  payload: any;
}
