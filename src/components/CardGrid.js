import React from 'react';
import Card from './Card';
import '../styles/cardGrid.css';

function CardGrid({ handleClick, cardSeq }) {
  console.log(cardSeq);
  return (
    <div className="card-grid">
      <Card type={cardSeq[0]} handleClick={handleClick} />
      <Card type={cardSeq[1]} handleClick={handleClick} />
      <Card type={cardSeq[2]} handleClick={handleClick} />
      <Card type={cardSeq[3]} handleClick={handleClick} />
      <Card type={cardSeq[4]} handleClick={handleClick} />
      <Card type={cardSeq[5]} handleClick={handleClick} />
      <Card type={cardSeq[6]} handleClick={handleClick} />
      <Card type={cardSeq[7]} handleClick={handleClick} />
    </div>
  );
}

export default CardGrid;
