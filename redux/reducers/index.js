import {combineReducers} from 'redux';
import {productsReducer} from './products';
import {cartReducer} from './cart';
import {filterReducer} from './filter';
import { historyReducer} from './history';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  filter: filterReducer,
  history: historyReducer,
});
