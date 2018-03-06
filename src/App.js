import React from 'react';
import './styles/css/App.css';
import ProductsContainer from './containers/ProductsContainer';
import OrdersContainer from './containers/OrdersContainer';

const App = () => {
  return (
    <div className="App">
      <h2>Mason Chan</h2>
      <ProductsContainer />
      <OrdersContainer />
    </div>
  );
}

export default App;
