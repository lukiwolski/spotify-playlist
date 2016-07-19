import React from 'react';
import { buttonStyles } from '../styles';

const Next = ({ handleClick }) =>
  <button style={buttonStyles} onClick={handleClick}>Next</button>;

Next.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Next;
