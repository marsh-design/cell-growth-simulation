// src/components/Cell.tsx
import React from 'react';
import '../styles/Cell.css';
interface CellProps {
    isOccupied: boolean;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ isOccupied, onClick }) => {
    return (
    <div className={`cell ${isOccupied ? 'occupied' : ''}`} onClick={onClick}></div>
    );
};

export default Cell;