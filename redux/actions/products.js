import axios from 'axios';
import debounce from 'lodash.debounce';

export const types = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_IS_FETCHING: 'SET_IS_FETCHING',
};

export const setProducts = items => {
  return {
    type: types.SET_PRODUCTS,
    payload: items,
  };
};

export const setIsFetching = items => {
  return {
    type: types.SET_IS_FETCHING,
    payload: items,
  };
};

export const fetchProducts = search => dispatch => {
  dispatch(setIsFetching(true));
  axios
    .get(`https://62b1b2cac7e53744afbf0959.mockapi.io/items?title=${search}`)
    .then(({data}) => {
      alert('запрос done');
      dispatch(setProducts(data));
      dispatch(setIsFetching(false));
    })
    .catch(error => alert(error));
};
