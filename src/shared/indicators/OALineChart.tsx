'use client';

import React, { FC } from 'react';
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
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
      position: 'bottom' as const,
      align: 'start' as const,
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        boxHeight: 8,
      },
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
      cubicInterpolationMode: 'monotone' as const,
      backgroundColor: '#EAA43A',
      borderColor: '#EAA43A',
    },
    {
      label: 'Входящие звонки',
      data: ['11900', '10027', '19000', '16000', '20200', '8100', '7500'],
      cubicInterpolationMode: 'monotone' as const,
      backgroundColor: '#4F46E5',
      borderColor: '#4F46E5',
    },
  ],
};

const OALineChart = () => {
  return <Line options={options} data={data} />;
};

export default OALineChart;
