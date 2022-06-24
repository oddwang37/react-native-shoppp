import {types} from '../actions/products';

const initialState = {
  items: [],
  isLoading: true,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {...state, items: action.payload};
    case types.SET_IS_LOADING:
      return {...state, isLoading: action.payload};
    case types.SET_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
