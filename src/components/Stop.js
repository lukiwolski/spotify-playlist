import React from 'react';

const Stop = ({ handleClick }) =>
  <div onClick={handleClick}>
    Stop Button
  </div>;

Stop.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Stop;
