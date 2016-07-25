import React from 'react';
import style from '../style.css';
import { FaStop } from 'react-icons/lib/fa';

const Stop = ({ handleClick }) =>
  <button
    onClick={handleClick}
    className={style.control_button}
  >
    <FaStop />
  </button>;

Stop.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Stop;
