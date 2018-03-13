import React from 'react'

const OrderDetails = ({ handleChange, edit = true, textInput, notesInput, order, expanded = true }) => {
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
      let { address, city, notes, state, zip } = order;
      notesSection = (
        <div className='order__details-body'>
          <p>{notes}</p>
        </div>
      );
      addressSection = (
        <div className='order__details-body'>
          <p>{`${address}, ${city}, ${state}, ${zip}`}</p>
        </div>
      );
    }

    if (expanded) {
      return (
        <div className='order__details-wrapper'>
          <div className='order__details'>
            <div className='order__details-section'>
              <div className={'order__details-title ' + (edit ? 'order__details-title--edit' : '')}>
                <p>Notes</p>
              </div>
              {notesSection}
            </div>
            <div className='order__details-section'>
              <div className={'order__details-title ' + (edit ? 'order__details-title--edit' : '')}>
                <p>Address</p>
              </div>
              {addressSection}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
}

export default OrderDetails;
