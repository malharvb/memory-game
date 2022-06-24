import React, { useEffect, useState } from 'react';
import '../styles/scoreboard.css';

function ScoreBoard({ score }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const checkHighScore = () => {
      if (score > highScore) { setHighScore(score); }
    };
    checkHighScore();
  });

  if (score === 12) {
    return (
      <div className="score-board-container">
        <div className="current-score">
          You Win!!
        </div>
      </div>
    );
  }
  return (
    <div className="score-board-container">
      <div className="current-score">
        Current Score:
        {' '}
        {score}
      </div>
      <div className="high-score">
        High Score:
        {' '}
        {highScore}
      </div>
    </div>
  );
}

export default ScoreBoard;
