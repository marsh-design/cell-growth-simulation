
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface GrowthChartProps {
  data: number[];
  labels: string[];
}

const GrowthChart: React.FC<GrowthChartProps> = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Growth Rate',
        data: data,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (ms)', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Occupied Cells',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top', 
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default GrowthChart;