import ThemeDetailsReducer from './ThemeDetailsReducer';
import Cart from './cartReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  theme_details: ThemeDetailsReducer,
  cart:Cart
});

export default rootReducer;
