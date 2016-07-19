import React from 'react';
import { buttonStyles } from '../styles';

const Stop = ({ handleClick }) =>
  <button style={buttonStyles} onClick={handleClick}>Stop</button>;

Stop.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Stop;
