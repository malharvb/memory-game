import React from 'react';
import { ReactComponent as Smile } from '../svgs/smile.svg';
import { ReactComponent as Anchor } from '../svgs/anchor.svg';
import { ReactComponent as Coffee } from '../svgs/coffee.svg';
import { ReactComponent as Heart } from '../svgs/heart.svg';
import { ReactComponent as Hexagon } from '../svgs/hexagon.svg';
import { ReactComponent as Frown } from '../svgs/frown.svg';
import { ReactComponent as Square } from '../svgs/square.svg';
import { ReactComponent as Star } from '../svgs/star.svg';
import '../styles/card.css';

function Card({ type, handleClick }) {
  let card;

  switch (Number(type)) {
    case 0:
      card = <Smile />;
      break;
    case 1:
      card = <Anchor />;
      break;
    case 2:
      card = <Coffee />;
      break;
    case 3:
      card = <Heart />;
      break;
    case 4:
      card = <Hexagon />;
      break;
    case 5:
      card = <Frown />;
      break;
    case 6:
      card = <Square />;
      break;
    case 7:
      card = <Star />;
      break;
    default:
      card = null;
  }

  return (
    <div className="card-container" onClick={(e) => handleClick(e, type)}>
      {card}
    </div>
  );
}

export default Card;
