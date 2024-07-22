import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const swapPlayer = () => {
    setCurrentPlayer((prevPlayer) => ( prevPlayer === "X" ? "O" : "X"));
  };

  const handleSquareClick = (index) => {
    if (squares[index] === "") {
      const newSquares = [...squares];
      newSquares[index] = currentPlayer;
      setSquares(newSquares);
      swapPlayer();
    }
  };

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  return (
    <div className="App">
      <h2>Current Player: {currentPlayer}</h2>
      <div className="board">
        {squares.map((square, index) => (
          <button
            onClick={() => handleSquareClick(index)}
            className="square"
            key={index}
          >
            {square || index}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;