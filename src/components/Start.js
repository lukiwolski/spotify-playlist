import React from 'react';
import { buttonStyles } from '../styles';

const Start = ({ handleClick }) =>
  <button style={buttonStyles} onClick={handleClick}>Start</button>;

Start.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Start;
