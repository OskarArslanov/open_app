'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Исходящие звонки',
    },
  },
};

const labels = ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'];

const data = {
  labels,
  datasets: [
    {
      label: 'Отказ от подключения',
      data: ['8100', '4500', '12000', '3347', '15600', '8600', '5000'],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Ростов-на-Дону',
      data: [],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const OAColumnChart = () => {
  return <Bar options={options} data={data} />;
};

export default OAColumnChart;
