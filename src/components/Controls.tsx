// src/components/Controls.tsx
import React, { useState } from 'react';

interface ControlsProps {
  startPauseSimulation: () => void;
  resetSimulation: () => void;
  setTimeInterval: (interval: number) => void;
  isRunning: boolean;
  setGridSize: (rows: number, cols: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ startPauseSimulation, resetSimulation, setTimeInterval, isRunning, setGridSize }) => {
  const [rows, setRows] = useState<number>(20);
  const [cols, setCols] = useState<number>(20);

  const handleGridSizeChange = () => {
    setGridSize(rows, cols);
  };

  return (
    <div className="controls">
      <button onClick={startPauseSimulation}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetSimulation}>Reset</button>
      <input type="number" onChange={(e) => setTimeInterval(Number(e.target.value))} placeholder="Interval (ms)" />
      <div>
        <input type="number" value={rows} onChange={(e) => setRows(Number(e.target.value))} placeholder="Rows" />
        <input type="number" value={cols} onChange={(e) => setCols(Number(e.target.value))} placeholder="Cols" />
        <button onClick={handleGridSizeChange}>Set Grid Size</button>
      </div>
    </div>
  );
};

export default Controls;