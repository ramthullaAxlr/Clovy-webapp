// import {createStore} from 'redux';
// import rootReducer from './reducers/RootReducer';

// const store = createStore(rootReducer);

// export default store;
import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddlware from 'redux-thunk';
import reducers from './reducers/RootReducer';

const bindMiddlware = (middlware) => {
  if (process.env.NODE_ENV != 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlware));
  }

  return applyMiddleware(...middlware);
};

const reducer = (state, action) => {
  if (action.type == HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  const store = createStore(reducer, bindMiddlware([thunkMiddlware]));
  return store;
};

export const wrapper = createWrapper(initStore);