import React, { useState } from 'react';

export const useInput = ({ id, className, type, name, startValue }) => {
  const [value, setValue] = useState(startValue);
  return [
    value,
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      onChange={(e) => setValue(e.target.value)}
      defaultValue={value}
    />,
  ];
};
