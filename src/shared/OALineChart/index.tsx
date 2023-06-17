'use client';

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
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Звонки',
    },
  },
};

const labels = ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'];

const data = {
  labels,
  datasets: [
    {
      label: 'Исходящие звонки',
      data: ['3900', '4100', '9600', '12000', '8100', '3824', '1200'],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Входящие звонки',
      data: ['11900', '10027', '19000', '16000', '20200', '8100', '7500'],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const OALineChart = () => {
  return <Line options={options} data={data} />;
};

export default OALineChart;
