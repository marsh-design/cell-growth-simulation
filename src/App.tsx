import React, { useState } from 'react';
import Controls from './components/Controls';
import Grid from './components/Grid';
import GrowthChart from './components/GrowthChart';
import { simulateGrowth } from './services/simulation';
import './styles/App.css';

const App: React.FC = () => {
  const [grid, setGrid] = useState<boolean[][]>(Array.from({ length: 20 }, () => Array(20).fill(false)));
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [intervalValue, setIntervalValue] = useState<number>(1000);
  const [growthData, setGrowthData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const startPauseSimulation = () => {
    if (isRunning) {
      if (intervalId) clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setGrid(prevGrid => {
          const newGrid = simulateGrowth(prevGrid);
          const occupiedCells = newGrid.flat().filter(cell => cell).length;
          setGrowthData(prevData => [...prevData, occupiedCells]);
          setLabels(prevLabels => [...prevLabels, `${prevLabels.length * intervalValue}ms`]);
          return newGrid;
        });
      }, intervalValue);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const resetSimulation = () => {
    if (intervalId) clearInterval(intervalId);
    setGrid(Array.from({ length: 20 }, () => Array(20).fill(false)));
    setGrowthData([]);
    setLabels([]);
    setIsRunning(false);
  };

  const handleSetInterval = (newInterval: number) => {
    setIntervalValue(newInterval);
    if (isRunning) {
      if (intervalId) clearInterval(intervalId);
      const id = setInterval(() => {
        setGrid(prevGrid => {
          const newGrid = simulateGrowth(prevGrid);
          const occupiedCells = newGrid.flat().filter(cell => cell).length;
          setGrowthData(prevData => [...prevData, occupiedCells]);
          setLabels(prevLabels => [...prevLabels, `${prevLabels.length * newInterval}ms`]);
          return newGrid;
        });
      }, newInterval);
      setIntervalId(id);
    }
  };

  const setGridSize = (rows: number, cols: number) => {
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(false)));
  };

  return (
    <div className="App">
      <Grid grid={grid} setGrid={setGrid} />
      <Controls
        startPauseSimulation={startPauseSimulation}
        resetSimulation={resetSimulation}
        setTimeInterval={handleSetInterval}
        isRunning={isRunning}
        setGridSize={setGridSize}
      />
      <GrowthChart data={growthData} labels={labels} />
    </div>
  );
};

export default App;