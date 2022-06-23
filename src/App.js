import React, { useState, useRef, useEffect } from 'react';
import CardGrid from './components/CardGrid';
import Header from './Header';
import './styles/reset.css';

function App() {
  const [hits, setHits] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [cardSeq, setCardSeq] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [init, setInit] = useState(0);
  const prevRef = useRef();

  const generateRandomNumArr = () => {
    const newCardSeq = [];
    for (let i = 0; i < cardSeq.length;) {
      const currentNum = Math.floor(Math.random() * 8);
      if (newCardSeq.every((num) => num !== currentNum)) {
        newCardSeq.push(currentNum);
        i += 1;
      }
    }
    return newCardSeq;
  };

  const checkGameState = () => {
    if (!init) return;
    if (JSON.stringify(prevRef.current) === JSON.stringify(hits)) {
      console.log('GameOver');
    } else {
      setCardSeq(generateRandomNumArr());
    }
  };

  useEffect(() => {
    checkGameState();
    prevRef.current = hits;
  }, [hits]);

  const handleClick = (e, type) => {
    setInit(1);
    setHits((prevState) => {
      const newState = [...prevState];
      newState[type] = 1;
      return newState;
    });
  };

  return (
    <div className="App">
      <Header />
      <CardGrid handleClick={handleClick} cardSeq={cardSeq} />
    </div>
  );
}

export default App;
