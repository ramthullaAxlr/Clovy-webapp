import { cartInitialState, cartReducer } from "./cartReducer";
import { themeInitialState, themeReducer } from "./themeReducer";

import combineReducers from "./combineReducers";
import { layoutInitialState, layoutReducer } from "./layoutReducer";
export const initialState = {
  layout: layoutInitialState,
  cart: cartInitialState,
  theme: themeInitialState
};
export const rootReducer = combineReducers({
  layout: layoutReducer,
  cart: cartReducer,
  theme:themeReducer
});
