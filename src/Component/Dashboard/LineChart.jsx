import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ selectedData }) {
  // Extract dates, impressions, and clicks from the sample data
  const labels = selectedData.map((dataPoint) => dataPoint.date);
  const impressionsData = selectedData.map((dataPoint) =>
    parseFloat(dataPoint.impressions)
  );
  const clicksData = selectedData.map((dataPoint) =>
    parseFloat(dataPoint.clicks)
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Impressions',
        data: impressionsData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Clicks',
        data: clicksData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Line
      options={options}
      data={data}
    />
  );
}
