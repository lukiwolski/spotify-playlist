import React from 'react';

const Next = ({ handleClick }) =>
  <div onClick={handleClick}>
    Next Button
  </div>;

Next.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Next;
