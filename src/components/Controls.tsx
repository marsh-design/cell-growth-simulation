// src/components/Controls.tsx
import React from 'react';

interface ControlsProps {
  startPauseSimulation: () => void;
  resetSimulation: () => void;
  setTimeInterval: (interval: number) => void;
  isRunning: boolean;
}

const Controls: React.FC<ControlsProps> = ({ startPauseSimulation, resetSimulation, setTimeInterval, isRunning }) => {
  return (
    <div className="controls">
      <button onClick={startPauseSimulation}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetSimulation}>Reset</button>
      <input type="number" onChange={(e) => setTimeInterval(Number(e.target.value))} placeholder="Interval (ms)" />
    </div>
  );
};

export default Controls;