import React from 'react';

const Button = ({ children, type, click }) => {
  return (
    <button className="btn btn-primary" type={type} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
