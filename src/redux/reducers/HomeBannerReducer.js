import { HOME_BANNERS } from '../actions/ActionTypes';
const INITIAL_STATE = {
  home_banners: {},
};

const HomeBannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_BANNERS:
      return { ...state, home_banners: action.payload };
    default:
      return state;
  }
};

export default HomeBannerReducer;
