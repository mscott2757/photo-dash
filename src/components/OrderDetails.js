import React from 'react'

const OrderDetails = ({ handleChange, edit = true, textInput, notesInput, order, expanded = true }) => {
    let notesSection, addressSection, emailSection, trackingSection = null;
    if (edit) {
      emailSection = (
        <div className='order__details-body'>
          {textInput('email')}
        </div>
      );
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
      trackingSection = (
        <div className='order__details-body'>
          {textInput('tracking')}
        </div>
      );
    } else {
      let { tracking, email, address, city, notes, state, zip } = order;
      emailSection = (
        <div className='order__details-body'>
          <p>{email}</p>
        </div>
      );
      notesSection = (
        <div className='order__details-body'>
          <p>{notes}</p>
        </div>
      );
      addressSection = (
        <div className='order__details-body'>
          <p>{[address, city, state, zip].filter((item) => item).join(', ')}</p>
        </div>
      );
      trackingSection = (
        <div className='order__details-body'>
          <p>{tracking}</p>
        </div>
      );
    }

    if (expanded) {
      return (
        <div className='order__details-wrapper'>
          <div className='order__details'>
            <div className='order__details-section'>
              <div className={'order__details-title ' + (edit ? 'order__details-title--edit' : '')}>
                <p>Email</p>
              </div>
              {emailSection}
            </div>
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
            <div className='order__details-section'>
              <div className={'order__details-title ' + (edit ? 'order__details-title--edit' : '')}>
                <p>Tracking</p>
              </div>
              {trackingSection}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
}

export default OrderDetails;
