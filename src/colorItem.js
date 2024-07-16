import React from 'react';
import './index.css';

function ColorItem({ color, setColor }) {
  return (
    <div 
      className="color-item" 
      onClick={setColor} 
      style={{ backgroundColor: color }}
    />
  );
}

export default ColorItem;
