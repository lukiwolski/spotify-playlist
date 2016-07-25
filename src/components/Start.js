import React from 'react';
import style from '../style.css';
import { FaPlayCircle } from 'react-icons/lib/fa';

const Start = ({ handleClick }) =>
  <button
    onClick={handleClick}
    className={`${style.control_button} ${style.button_play}`}
  >
    <FaPlayCircle />
  </button>;

Start.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Start;
