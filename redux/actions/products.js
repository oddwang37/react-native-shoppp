export const types = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_IS_LOADING: 'SET_IS_LOADING',
};

export const setProducts = items => {
  return {
    type: types.SET_PRODUCTS,
    payload: items,
  };
};

export const setIsLoading = bool => ({
  type: types.SET_IS_LOADING,
  payload: bool,
});
