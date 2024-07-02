// src/components/Grid.tsx
import '..styles/grid.css';
import React from 'react';
import Cell from './Cell';

interface GridProps {
    grid: boolean[][];
    setGrid: React.Dispatch<React.SetStateAction<boolean[][]>>;
}

const Grid: React.FC<GridProps> = ({ grid, setGrid }) => {
    const toggleCell = (row: number, col: number) => {
        setGrid(prevGrid => {
            const newGrid = prevGrid.map(row => [...row]);
            newGrid[row][col] = !prevGrid[row][col];
            return newGrid;
    });
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