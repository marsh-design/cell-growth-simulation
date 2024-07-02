// src/services/simulation.ts
export const simulateGrowth = (grid: boolean[][]): boolean[][] => {
    const newGrid = grid.map(arr => [...arr]);
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j]) {
          if (i > 0 && !grid[i - 1][j]) newGrid[i - 1][j] = true;
          if (i < grid.length - 1 && !grid[i + 1][j]) newGrid[i + 1][j] = true;
          if (j > 0 && !grid[i][j - 1]) newGrid[i][j - 1] = true;
          if (j < grid[i].length - 1 && !grid[i][j + 1]) newGrid[i][j + 1] = true;
        }
      }
    }
    return newGrid;
  };