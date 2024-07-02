// src/components/Grid.tsx
import React from 'react';
import '../styles/Grid.css';
import Cell from './Cell';

interface GridProps {
  grid: boolean[][];
  setGrid: React.Dispatch<React.SetStateAction<boolean[][]>>;
}

const Grid: React.FC<GridProps> = ({ grid, setGrid }) => {
  const toggleCell = (row: number, col: number) => {
    const newGrid = grid.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return !cell;
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} isOccupied={cell} onClick={() => toggleCell(rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;