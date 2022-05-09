import { HOME_BANNERS } from './ActionTypes';

export const getHomeBanners = (spec) => {
  return {
    type: HOME_BANNERS,
    payload: spec,
  };
};