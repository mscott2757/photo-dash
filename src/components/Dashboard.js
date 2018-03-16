import React, { Component } from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import OrdersContainer from '../containers/OrdersContainer';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className='dashboard'>
        <ProductsContainer />
        <OrdersContainer />
      </div>
    );
  }
}

export default Dashboard;

