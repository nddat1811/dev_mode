
import React from 'react';
import './style.css'; // Import CSS file

const Button = ({ onClick, children }) => {
  return (
    <button className="btn_back" onClick={onClick}>
        <span className="text">{children}</span>
    </button>
  );
};

export default Button;