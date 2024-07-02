// src/components/GrowthChart.tsx
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface GrowthChartProps {
  data: number[];
  labels: string[];
}

const GrowthChart: React.FC<GrowthChartProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Bacterial Growth',
        data,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default GrowthChart;