import React from 'react';
import { ColumnTitle } from './utils';

const ProductHeader = ({ handleToggleForm, formIsVisible }) => {
  const sections = ['Product', 'Stock', 'Price'];
  return (
    <div className='header'>
      {sections.map((title) => <ColumnTitle className='product__section' title={title} />)}
      <div className='product__section section--top-right'>
        <a href='/toggle-form' onClick={handleToggleForm}>{(formIsVisible ? '-' : '+')}</a>
      </div>
    </div>
  );
}

export default ProductHeader;
