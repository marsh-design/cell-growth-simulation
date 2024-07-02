// src/components/Cell.tsx
import React from 'react';


interface CellProps {
  isOccupied: boolean;
  onClick: () => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void; // Add this prop
}

const Cell: React.FC<CellProps> = ({ isOccupied, onClick, onKeyPress }) => {
  return (
    <div
      className={`cell ${isOccupied ? 'occupied' : ''}`}
      onClick={onClick}
      onKeyPress={onKeyPress} // Add this event handler
      tabIndex={0} // Make the cell focusable
      role="button" // Provide a role for screen readers
      aria-pressed={isOccupied} // Indicate the state for screen readers
    ></div>
  );
};

export default Cell;