import {types} from './../actions/cart';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_CART:
      return {products: [...state.products, action.payload]};
    case types.DELETE_PRODUCT_CART:
      const newProducts = state.products.filter(
        product => product.id !== action.payload,
      );
      return {products: newProducts};
    case types.CLEAR_CART:
      return {products: []};
    default:
      return state;
  }
};
