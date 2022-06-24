export const types = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_ERROR: 'SET_ERROR',
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

export const setError = errorText => ({
  type: types.SET_ERROR,
  payload: errorText,
});
