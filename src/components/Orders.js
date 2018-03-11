import React from 'react';
import Order from './Order';
import NewOrder from './NewOrder';

const Orders = ({ orders, products, isFetching, formIsVisible = true, handleDeleteOrder,
                handleUpdateOrder, handleCreateOrder, handleToggleForm }) => {
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
          <div className='order__section section--top-right'>
            <a href='/toggle-form' onClick={handleToggleForm}>{(formIsVisible ? '-' : '+')}</a>
          </div>
        </div>
        <NewOrder
          handleCreate={handleCreateOrder}
          toggleForm={handleToggleForm}
          products={products}
          formIsVisible={formIsVisible}
        />
        {orders.map((order, index) => {
          return <Order
            key={order._id}
            order={order}
            odd={index % 2 === 0}
            handleUpdate={handleUpdateOrder(order._id)}
            handleRemove={handleDeleteOrder(order._id)}
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
