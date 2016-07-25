import React from 'react';
import style from '../style.css';
import { FaStepForward } from 'react-icons/lib/fa';

const Next = ({ handleClick }) =>
  <button
    onClick={handleClick}
    className={style.control_button}
  >
    <FaStepForward />
  </button>;

Next.propTypes = {
  handleClick: React.PropTypes.func,
};

export default Next;
