export const types = {
  SET_PRODUCTS: 'SET_PRODUCTS',
};

export const setProducts = items => {
  return {
    type: types.SET_PRODUCTS,
    payload: items,
  };
};
