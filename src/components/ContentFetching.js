import React from 'react';

const ContentFetching = ({ isFetching }) => {
  if (isFetching) {
    return (
      <div className='row--fetching'>
        <i className='fa fa-circle-o-notch fa-spin'></i>
      </div>
    );
  } else {
    return null;
  }
}

export default ContentFetching;
