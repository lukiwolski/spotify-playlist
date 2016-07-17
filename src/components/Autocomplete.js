import React from 'react';

const Autocomplete = ({ hint, handleClick }) =>
  <div onClick={handleClick} >
    {hint}
  </div>;

Autocomplete.propTypes = {
  hint: React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

export default Autocomplete;
