import React from 'react';

const OrderHeader = ({ handleToggleForm, formIsVisible }) => {
  return (
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
  );
}

export default OrderHeader;
