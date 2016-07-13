import React from 'react';

const Autocomplete = ({ hint, handleClick }) =>
  <div onClick={handleClick} >    
    {hint}
  </div>;
  
export default Autocomplete;
