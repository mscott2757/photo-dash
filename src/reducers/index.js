import { combineReducers } from 'redux';
import products from './products';
import orders from './orders';
import login from './login';
import validation from './validation';

const dash = combineReducers({
  products,
  orders,
  login,
  validation
});

export default dash;
