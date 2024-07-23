import React, { useState } from 'react';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const swapPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  const handleSquareClick = (index) => {
    if (squares[index] === "" && !winner) {
      const newSquares = [...squares];
      newSquares[index] = currentPlayer;
      setSquares(newSquares);
      if (!checkWinner(newSquares)) {
        swapPlayer();
      }
    }
  };

  const checkWinner = (squares) => {
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
      <h1><div className={`winner-message ${winner ? 'winner-visible' : ''}`}>
        Player {winner} wins!
      </div></h1>

      <h2>Current Player: {currentPlayer}</h2>
      
      <div className="board">
        {squares.map((square, index) => (
          <button
            onClick={() => handleSquareClick(index)}
            className="square"
            key={index}
          >
            {square}
          </button>
        ))}
      </div>
      
      <button onClick={resetGame} className="reset-button">Reset Game</button>
    </div>
  );
}

export default App;
