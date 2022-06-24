import axios from 'axios';

import {setProducts, setIsLoading, setError} from '../actions/products';

export const fetchProducts = (filter, sortBy, order) => dispatch => {
  dispatch(setIsLoading(true));
  dispatch(setError(null));
  let parameter = filter ? `filter=${filter}&` : '';
  sortBy ? (parameter += `sortBy=${sortBy}&`) : null;
  order ? (parameter += `order=${order}`) : null;
  axios
    .get(`https://62b1b2cac7e53744afbf0959.mockapi.io/items?${parameter}`)
    .then(({data}) => {
      dispatch(setProducts(data));
      dispatch(setIsLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};
