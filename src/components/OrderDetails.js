import React from 'react'

const OrderDetails = ({ handleChange, edit, textInput, notesInput, order }) => {
    let notesSection, addressSection = null;
    if (edit) {
      notesSection = (
        <div className='order__details-body'>
          {notesInput()}
        </div>
      );
      addressSection = (
        <div className='order__details-body'>
          {textInput('address')}
          {textInput('city')}
          {textInput('state')}
          {textInput('zip')}
        </div>
      );
    } else {
      let { local, address, city, notes, state, zip } = order;
      notesSection = (
        <div className='order__details-body'>
          <p>{notes}</p>
        </div>
      );
      addressSection = (
        <div className='order__details-body'>
          <p>{(local ? '' : address)}</p>
          <p>{(local ? '' : `${city}, ${state}, ${zip}`)}</p>
        </div>
      );
    }

    return (
      <div className='order__details'>
        <div className='order__details-section'>
          <div className='order__details-title'>
            <p>Notes</p>
          </div>
          {notesSection}
        </div>
        <div className='order__details-section'>
          <div className='order__details-title'>
            <p>Address</p>
          </div>
          {addressSection}
        </div>
      </div>
    );
}

export default OrderDetails;
