import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  // console.log('wi', board);
  // console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleClickPosition = position => {
    if (board[position] || winner) {
      return;
    }

    setboard(prevState => {
      return prevState.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h2>{message}</h2>
      <Board board={board} handleClickPosition={handleClickPosition} />
    </div>
  );
};

export default App;
