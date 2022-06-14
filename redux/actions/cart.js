export const types = {
  ADD_PRODUCT_CART: 'ADD_PRODUCT_CART',
  DELETE_PRODUCT_CART: 'DELETE_PRODUCT_CART',
};

export const addProductCart = productObj => {
  return {
    type: types.ADD_PRODUCT_CART,
    payload: productObj,
  };
};

export const deleteProductCart = id => {
  return {
    type: types.DELETE_PRODUCT_CART,
    payload: id,
  };
};
