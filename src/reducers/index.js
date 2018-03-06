import { combineReducers } from 'redux';
import products from './products';
import orders from './orders';

const dash = combineReducers({
  products,
  orders
});

export default dash;
