import React from 'react';

const OrderName = ({ edit, textInput, name: { first, last } }) => {
  if (!edit) {
    return <p>{`${first} ${last}`}</p>;
  } else {
    return (
      <div className='order__name-input'>
        {textInput('first')}
        {textInput('last')}
      </div>
    );
  }
}

export default OrderName;
