import { Middleware } from "redux";
import { RootState } from "../store";

export const loggerMiddleware: Middleware<object, RootState> =
(store) => (next) => (action) => {
  console.log('store => ', store)
  console.log('next => ', next)
  console.log('action => ', action)
  
  // if (!action.type) {
  //   return next(action);
  // }

  // console.log("type => ", action.type);
  // console.log("payload => ", action.payload);
  // console.log("currentState => ", store.getState());

  next(action);

  console.log("next state => ", store.getState());
}