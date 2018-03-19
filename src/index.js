import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import dashboard from './reducers/';
import history from './history';

const store = createStore(
  dashboard,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
