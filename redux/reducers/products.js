import {types} from '../actions/products';

const initialState = {
  items: [],
  isFetching: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {items: action.payload, isFetching: false};
    case types.CHANGE_PRODUCT_IN_CART:
      const oldItems = state.items.map(item => {
        if (item.id === action.payload) {
          return {...item, inCart: !item.inCart};
        } else {
          return item;
        }
      });
      return {...state, items: oldItems};
    default:
      return state;
  }
};
