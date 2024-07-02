// src/components/Controls.tsx
import React from 'react';

interface ControlsProps {
  startPauseSimulation: () => void;
  resetSimulation: () => void;
  setTimeInterval: (interval: number) => void;
  isRunning: boolean;
  setGridSize: (rows: number, cols: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  startPauseSimulation,
  resetSimulation,
  setTimeInterval,
  isRunning,
  setGridSize,
}) => {
  const handleGridSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [rows, cols] = event.target.value.split(',').map(Number);
    setGridSize(rows, cols);
  };

  return (
    <div className="controls">
      <button onClick={startPauseSimulation} aria-label={isRunning ? 'Pause Simulation' : 'Start Simulation'}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetSimulation} aria-label="Reset Simulation">Reset</button>
      <input
        type="number"
        onChange={(e) => setTimeInterval(Number(e.target.value))}
        placeholder="Interval (ms)"
        aria-label="Set Interval"
      />
      <input
        type="text"
        onChange={handleGridSizeChange}
        placeholder="Rows,Cols"
        aria-label="Set Grid Size"
      />
    </div>
  );
};

export default Controls;