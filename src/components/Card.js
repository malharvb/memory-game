import React from 'react';
import svgArray from '../util';

import '../styles/card.css';

function Card({ type, handleClick }) {
  return (
    <div className="card-container" onClick={(e) => handleClick(e, type)}>
      {svgArray[type]}
    </div>
  );
}

export default Card;
