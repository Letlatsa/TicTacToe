import React from 'react';

interface StatusProps {
  currentPlayer: string;
  winner: string | null;
}

const Status: React.FC<StatusProps> = ({ currentPlayer, winner }) => {
  return (
    <div>
      {winner ? (
        <h2>Player {winner} wins!</h2>
      ) : (
        <h2>Current Player: {currentPlayer}</h2>
      )}
    </div>
  );
};

export default Status;
