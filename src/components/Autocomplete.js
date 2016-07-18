import React from 'react';
import { autoCompleteStyles } from '../styles';

const Autocomplete = ({ hint, handleClick }) =>
  <div style={autoCompleteStyles} onClick={handleClick} >
    {hint}
  </div>;

Autocomplete.propTypes = {
  hint: React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

export default Autocomplete;
