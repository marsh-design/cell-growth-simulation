// src/App.tsx
import '.styles/App.css';
import React, { useState } from 'react';
import Controls from './components/Controls';
import Grid from './components/Grid';
import { simulateGrowth } from './services/simulation';

const App: React.FC = () => {
  const [grid, setGrid] = useState<boolean[][]>(Array.from({ length: 20 }, () => Array(20).fill(false)));
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [interval, setIntervalValue] = useState<number>(1000);

  const startPauseSimulation = () => {
    if (isRunning) {
      if (intervalId) clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setGrid(prevGrid => simulateGrowth(prevGrid));
      }, interval);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const resetSimulation = () => {
    if (intervalId) clearInterval(intervalId);
    setGrid(Array.from({ length: 20 }, () => Array(20).fill(false)));
    setIsRunning(false);
  };

  const handleSetInterval = (newInterval: number) => {
    setIntervalValue(newInterval);
    if (isRunning) {
      if (intervalId) clearInterval(intervalId);
      const id = setInterval(() => {
        setGrid(prevGrid => simulateGrowth(prevGrid));
      }, newInterval);
      setIntervalId(id);
    }
  };

  return (
    <div className="App">
      <Grid grid={grid} setGrid={setGrid} />
      <Controls
        startPauseSimulation={startPauseSimulation}
        resetSimulation={resetSimulation}
        setTimeInterval={handleSetInterval}
        isRunning={isRunning}
      />
    </div>
  );
};

export default App;