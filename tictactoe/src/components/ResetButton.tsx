import React from 'react';

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button onClick={onReset} className="reset-button">
      Reset Game
    </button>
  );
};

export default ResetButton;
