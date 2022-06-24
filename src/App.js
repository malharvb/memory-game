import React from 'react';
import Header from './Header';
import GameBoard from './components/GameBoard';
import './styles/reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
