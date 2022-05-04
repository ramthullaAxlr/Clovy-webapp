const THEME = "THEME";
export const themeInitialState = {
  themeData: {},
};
export const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME: 
      return action.payload
    default: {
      return state;
    }
  }
};
