import {types} from '../actions/products';

const initialState = {
  items: [],
  isFetching: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {items: action.payload, isFetching: false};
      return {...state, items: oldItems};
    default:
      return state;
  }
};
