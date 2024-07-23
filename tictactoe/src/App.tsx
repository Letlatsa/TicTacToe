import React, { useState } from 'react';
import './App.css';
import Board from './components/Board.tsx';
import Status from './components/Status.tsx';
import ResetButton from './components/ResetButton.tsx';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  const swapPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  const handleSquareClick = (index: number) => {
    if (squares[index] === "" && !winner) {
      const newSquares = [...squares];
      newSquares[index] = currentPlayer;
      setSquares(newSquares);
      if (!checkWinner(newSquares)) {
        swapPlayer();
      }
    }
  };

  const checkWinner = (squares: string[]) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="App">
      <Status currentPlayer={currentPlayer} winner={winner} />
      <Board squares={squares} onSquareClick={handleSquareClick} />
      <ResetButton onReset={resetGame} />
    </div>
  );
}

export default App;
