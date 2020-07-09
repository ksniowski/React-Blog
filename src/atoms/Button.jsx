import React from 'react';

const Button = ({ id, className, type, onClickFn, label }) => {
  return (
    <button id={id} className={className} type={type} onClick={onClickFn}>
      {label}
    </button>
  );
};

export default Button;
