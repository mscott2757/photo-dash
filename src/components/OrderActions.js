import React from 'react';

const OrderActions = ({
  edit = true,
  expanded = false,
  done = false,
  toggleDetails, toggleEdit, handleComplete, handleSubmit, handleRemove
}) => {
  const actions = [
    { handler: toggleDetails, icon: (expanded ? 'caret-up' : 'caret-down'), active: !edit },
    { handler: toggleEdit, icon: 'edit', active: !edit },
    { handler: handleComplete, icon: 'check', active: !edit && !done },
    { handler: handleRemove, icon: 'trash', active: !edit },
    { handler: handleSubmit, icon: 'save', active: edit },
    { handler: toggleEdit, icon: 'times', active: edit }
  ]

  let activeActions = actions.filter(({ active }) => active);

  return (
    <div className='actions'>
      {activeActions.map(({ handler, icon }, index) => {
        return (
          <div className='action' key={index}>
            <button onClick={handler}>
              <i className={`fa fa-${icon}`}></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default OrderActions;
