import React from 'react';
import Order from './Order';
import NewOrder from './NewOrder';
import OrderHeader from './OrderHeader';
import ContentFetching from './ContentFetching';

const Orders = ({
  orders, products, isFetching,
  formIsVisible = true,
  handleDeleteOrder, handleUpdateOrder, handleCreateOrder, handleToggleForm
}) => {
  let body = null;
  if (isFetching) {
    body = <ContentFetching />;
  } else {
    const headerProps = { handleToggleForm, formIsVisible };
    const newOrderProps = { handleCreate: handleCreateOrder, toggleForm: handleToggleForm, products, formIsVisible };
    body = (
      <div className='content'>
        <OrderHeader {...headerProps} />
        <NewOrder {...newOrderProps} />
        {orders.map((order, index) => {
          let { _id, product: { _id: productId }} = order;
          return <Order
            key={_id}
            order={order}
            odd={index % 2 === 0}
            handleUpdate={handleUpdateOrder(_id)}
            handleDelete={handleDeleteOrder(_id, productId)}
          />
        })}
      </div>
    );
  }

  return (
    <div className='orders'>
      <h3>Orders</h3>
      <div className='body'>{body}</div>
    </div>
  );
}

export default Orders;
