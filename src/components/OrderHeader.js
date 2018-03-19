import React from 'react';
import { ColumnTitle } from './utils';

const OrderHeader = ({ handleToggleForm, formIsVisible }) => {
  const sections = ['Name', 'Product', 'Type', 'Status'];
  return (
    <div className='header'>
      {sections.map((title, index) => <ColumnTitle key={index} className='order__section' title={title} />)}
      <div className='order__section section--top-right'>
        <a href='/toggle-form' onClick={handleToggleForm}>{(formIsVisible ? '-' : '+')}</a>
      </div>
    </div>
  );
}

export default OrderHeader;
