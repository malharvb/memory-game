import React, { useState, useRef, useEffect } from 'react';
import CardGrid from './CardGrid';
import ScoreBoard from './ScoreBoard';

function GameBoard() {
  const [hits, setHits] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [cardSeq, setCardSeq] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [score, setScore] = useState(0);

  const prevHitsRef = useRef();

  const generateRandomNumArr = () => {
    const newCardSeq = [];
    for (let i = 0; i < cardSeq.length;) {
      const currentNum = Math.floor(Math.random() * 12);
      const isUnique = newCardSeq.every((num) => num !== currentNum);
      if (isUnique) {
        newCardSeq.push(currentNum);
        i += 1;
      }
    }
    return newCardSeq;
  };

  useEffect(() => {
    const checkGameState = () => {
      const isInitialState = hits.every((hit) => hit === 0);
      if (isInitialState) return;
      if (JSON.stringify(prevHitsRef.current) === JSON.stringify(hits)) {
        setCardSeq(generateRandomNumArr());
        setHits([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setScore(0);
      } else {
        setCardSeq(generateRandomNumArr());
        setScore(score + 1);
      }
    };
    checkGameState();
    prevHitsRef.current = hits;
  }, [hits]);

  const handleClick = (e, type) => {
    setHits((prevState) => {
      const newState = [...prevState];
      newState[type] = 1;
      return newState;
    });
  };

  return (
    <>
      <ScoreBoard score={score} />
      <CardGrid handleClick={handleClick} cardSeq={cardSeq} />
    </>
  );
}

export default GameBoard;
