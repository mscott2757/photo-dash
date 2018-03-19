import React from 'react';
import { IconButton } from './utils';

const OrderActions = ({
  edit = true,
  expanded = false,
  done = false,
  toggleDetails, toggleEdit, handleComplete, handleSubmit, toggleConfirm
}) => {
  const actions = [
    { handler: toggleDetails, icon: (expanded ? 'caret-up' : 'caret-down'), active: !edit },
    { handler: toggleEdit, icon: 'edit', active: !edit },
    { handler: handleComplete, icon: 'check', active: !edit && !done },
    { handler: toggleConfirm, icon: 'trash', active: !edit },
    { handler: handleSubmit, icon: 'save', active: edit },
    { handler: toggleEdit, icon: 'times', active: edit }
  ]

  let activeActions = actions.filter(({ active }) => active);

  return (
    <div className='actions'>
      {activeActions.map((action, index) => {
        return (
          <div className='action' key={index}>
            <IconButton { ...action } />
          </div>
        );
      })}
    </div>
  );
}

export default OrderActions;
