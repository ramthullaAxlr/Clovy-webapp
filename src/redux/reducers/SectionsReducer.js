import { BEST_SELLING, TOP_CATEGORIES, TOP_RATINGS, NEW_ARRIVALS, BIG_DISCOUNTS } from "../actions/ActionTypes";
const INITIAL_STATE = {
    best_selling: [],
    top_categories: [],
    top_ratings: [],
    new_arrivals: [],
    big_discounts: [],
};

const SectionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BEST_SELLING:
            return { ...state, best_selling: action.payload };
        case TOP_CATEGORIES:
            return { ...state, top_categories: action.payload };
        case TOP_RATINGS:
            return { ...state, top_ratings: action.payload };
        case NEW_ARRIVALS:
            return { ...state, new_arrivals: action.payload };
        case BIG_DISCOUNTS:
            return { ...state, big_discounts: action.payload };    
        default:
            return state;
    }
};

export default SectionsReducer;
