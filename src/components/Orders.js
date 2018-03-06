import React from 'react';
import Order from './Order';

const Orders = ({ orders, isFetching, handleUpdateOrder }) => {

  let body = null;
  if (isFetching) {
    body = (
      <div className='content--fetching'>
        <i className='fa fa-circle-o-notch fa-spin'></i>
      </div>
    );
  } else {
    body = (
      <div className='content'>
        <div className='header'>
          <div className='order__section'>
            <p>Name</p>
          </div>
          <div className='order__section'>
            <p>Product</p>
          </div>
          <div className='order__section'>
            <p>Type</p>
          </div>
          <div className='order__section'>
            <p>Status</p>
          </div>
          <div className='order__section'>
            <p>Actions</p>
          </div>
        </div>
        {orders.map((order, index) => {
          return <Order
            key={order._id}
            order={order}
            odd={index % 2 === 0}
            handleUpdate={handleUpdateOrder(order._id)}
          />
        })}
      </div>
    );
  }

  return (
    <div className='orders'>
      <h3>Orders</h3>
      <div className='body'>
        {body}
      </div>
    </div>
  );
}

export default Orders;
