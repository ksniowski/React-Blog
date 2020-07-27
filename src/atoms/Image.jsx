import React from 'react';

const Image = ({ id, className, alt, title, src }) => {
  return (
    <img id={id} className={className} src={src} alt={alt} title={title} />
  );
};

export default Image;
