import React, { Component } from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import OrdersContainer from '../containers/OrdersContainer';
import { clearUser } from '../cookies';
import history from '../history';

class Dashboard extends Component {
  componentDidMount() {
    this.props.validateUser();
  }

  handleLogout = () => {
    clearUser();
    history.push('/login');
  }

  render() {
    let dashboard = null;
    if (this.props.isLoggedIn) {
      dashboard = (
        <div className='dashboard'>
          <div className='dashboard__header'>
            <h2>Mason Chan</h2>
            <button onClick={this.handleLogout}>Log out</button>
          </div>
          <ProductsContainer />
          <OrdersContainer />
        </div>
      );
    }

    return dashboard;
  }
}

export default Dashboard;

