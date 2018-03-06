import React from 'react';

const OrderType = ({ edit, localInput, local }) => {
  if (!edit) {
    return <p>{(local ? 'local' : 'mail')}</p>;
  } else {
    return (
      <div className='order__checkbox'>
        <p>local</p>
        {localInput()}
      </div>
    );
  }
}

export default OrderType;
