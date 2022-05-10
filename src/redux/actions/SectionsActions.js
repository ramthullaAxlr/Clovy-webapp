import { BEST_SELLING, TOP_CATEGORIES, TOP_RATINGS, NEW_ARRIVALS, BIG_DISCOUNTS } from "./ActionTypes";

export const getBestSellingData = (spec) => {
  return {
    type: BEST_SELLING,
    payload: spec,
  };
};

export const getTopCategoriesData = (spec) => {
  return {
    type: TOP_CATEGORIES,
    payload: spec,
  };
};

export const getTopRatingsData = (spec) => {
  return {
    type: TOP_RATINGS,
    payload: spec,
  };
};

export const getNewArrivalsData = (spec) => {
    return {
      type: NEW_ARRIVALS,
      payload: spec,
    };
  };
  
  export const getBigDiscountsData = (spec) => {
    return {
      type: BIG_DISCOUNTS,
      payload: spec,
    };
  };