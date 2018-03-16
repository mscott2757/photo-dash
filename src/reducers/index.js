import { combineReducers } from 'redux';
import products from './products';
import orders from './orders';
import login from './login';

const dash = combineReducers({
  products,
  orders,
  login
});

export default dash;
