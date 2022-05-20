import {types} from '../actions/products';

const initialState = {
  items: [{title: 'asdasdasd', img: 'asdasd'}, {title: 'asdasd', img: 'asdasdasd'}],
  isFetching: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {items: action.payload, isFetching: false};
    default:
      return state;
  }
};
