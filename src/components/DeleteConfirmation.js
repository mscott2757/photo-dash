import React from 'react';

const DeleteConfirmation = ({ confirm, odd, handleDelete, toggleConfirm }) => {
  if (confirm) {
    return (
      <div className={'confirmation ' + (odd ? 'confirmation--odd' : '')}>
        <div className='confirmation__actions'>
          <p>Confirm Delete</p>
          <div className='action'>
            <button onClick={handleDelete}><i className="fa fa-check"></i></button>
          </div>
          <div className='action'>
            <button onClick={toggleConfirm}><i className="fa fa-times"></i></button>
          </div>
        </div>
      </div>
    );
  } else {
    return null
  }
}

export default DeleteConfirmation;
