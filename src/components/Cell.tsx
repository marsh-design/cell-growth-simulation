// src/components/Cell.tsx
import React from 'react';


interface CellProps {
    isOccupied: boolean;
    onClick: () => void;
    onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Cell: React.FC<CellProps> = ({ isOccupied, onClick, onKeyPress }) => {
    return (
        <div
            className={`cell ${isOccupied ? 'occupied' : ''}`}
            onClick={onClick}
            onKeyPress={onKeyPress}
            tabIndex={0}
            role="button"
            aria-pressed={isOccupied}
        ></div>
    );
};

export default Cell;