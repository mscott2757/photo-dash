import React from 'react';

const OrderActions = ({ edit, expanded, done, toggleDetails, toggleEdit, handleComplete, handleSubmit }) => {
  const actions = [
    { handler: toggleDetails, text: (expanded ? 'hide' : 'details'), active: !edit },
    { handler: toggleEdit, text: 'edit', active: !edit },
    { handler: handleComplete, text: 'complete', active: !edit && !done },
    { handler: handleSubmit, text: 'save', active: edit },
    { handler: toggleEdit, text: 'cancel', active: edit }
  ]

  let activeActions = actions.filter(({ active }) => active);

  return (
    <div className='actions'>
      {activeActions.map(({ handler, text }, index) => {
        return (
          <div className='action' key={index}>
            <button onClick={handler}>{text}</button>
          </div>
        );
      })}

    </div>
  );
}

export default OrderActions;
