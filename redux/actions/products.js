import axios from 'axios';

export const types = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  CHANGE_PRODUCT_IN_CART: 'CHANGE_PRODUCT_IN_CART',
}

export const setProducts = (items) => {
  return {
    type: types.SET_PRODUCTS,
    payload: items,
  }
};
export const changeProductInCart = (id) => {
  return {
    type: types.CHANGE_PRODUCT_IN_CART,
    payload: id,
  }
}