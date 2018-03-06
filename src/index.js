import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import dash from './reducers/';
import { fetchProducts } from './actions/products';
import { fetchOrders } from './actions/orders';

const store = createStore(
  dash,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(fetchProducts());
store.dispatch(fetchOrders());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
