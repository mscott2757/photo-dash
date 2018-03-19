import React from 'react';
import { IconButton } from './utils';

const DeleteConfirmation = ({ confirm, odd, handleDelete, toggleConfirm }) => {
  if (confirm) {
    return (
      <div className={'confirmation ' + (odd ? 'confirmation--odd' : '')}>
        <div className='confirmation__actions'>
          <p>Confirm Delete</p>
          <div className='action'>
            <IconButton handler={handleDelete} icon='check' />
          </div>
          <div className='action'>
            <IconButton handler={toggleConfirm} icon='times' />
          </div>
        </div>
      </div>
    );
  } else {
    return null
  }
}

export default DeleteConfirmation;
