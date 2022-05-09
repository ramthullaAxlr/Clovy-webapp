import ThemeDetailsReducer from './ThemeDetailsReducer';
import Cart from './cartReducer';
import HomeBannerReducer from './HomeBannerReducer'
import SectionsReducer from './SectionsReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  theme_details: ThemeDetailsReducer,
  cart:Cart,
  Home_banners: HomeBannerReducer,
  all_sections: SectionsReducer
});

export default rootReducer;
