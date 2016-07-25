import React from 'react';
import style from '../style.css';

const Autocomplete = ({ hint, handleClick }) =>
  <div
    onClick={handleClick}
    className={style.autocomplete}
  >
    {hint}
  </div>;

Autocomplete.propTypes = {
  hint: React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

export default Autocomplete;
