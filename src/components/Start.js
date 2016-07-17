import React from 'react';

const Start = ({ handleClick }) =>
  <div onClick={handleClick}>
    Start Button
  </div>;

Start.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Start;
