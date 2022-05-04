import { THEME_DETAILS } from './ActionTypes';

export const getThemeDetails = (spec) => {
  return {
    type: THEME_DETAILS,
    payload: spec,
  };
};