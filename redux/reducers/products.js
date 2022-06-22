import {types} from '../actions/products';

const initialState = {
  items: [],
  isFetching: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {...state, items: action.payload};
    case types.SET_IS_FETCHING:
      return {...state, isFetching: action.payload};
    default:
      return state;
  }
};
