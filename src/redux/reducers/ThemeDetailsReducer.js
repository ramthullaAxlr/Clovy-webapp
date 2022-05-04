import { THEME_DETAILS } from '../actions/ActionTypes';
const INITIAL_STATE = {
  theme_details: {},
};

const ThemeDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME_DETAILS:
      return { ...state, theme_details: action.payload };
    default:
      return state;
  }
};

export default ThemeDetailsReducer;
