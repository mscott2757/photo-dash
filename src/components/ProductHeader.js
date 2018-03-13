import React from 'react';

const ProductHeader = ({ handleToggleForm, formIsVisible }) => {
  return (
    <div className='header'>
      <div className='product__section'>
        <p>Product</p>
      </div>
      <div className='product__section'>
        <p>Stock</p>
      </div>
      <div className='product__section section--top-right'>
        <a href='/toggle-form' onClick={handleToggleForm}>{(formIsVisible ? '-' : '+')}</a>
      </div>
    </div>
  );
}

export default ProductHeader;
