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
  Chart,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTranslations } from 'next-intl';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'];

const OAColumnChart = () => {
  const t = useTranslations('Portfolio.chartjs');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'start' as const,
        labels: {
          boxHeight: 24,
          generateLabels: (chart: Chart) => {
            const currentDatasets = [
              ...chart.data.datasets,
              { label: t('rostov'), data: [] },
            ];
            return currentDatasets?.map((l, i) => ({
              datasetIndex: i,
              text: l.label,
              fontColor: '#4F46E5',
              fillStyle: '#E8E7FF',
              strokeStyle: '#E8E7FF',
              borderRadius: 10,
            }));
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 5,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: t('rejects'),
        data: ['8100', '4500', '12000', '3347', '15600', '8600', '5000'],
        backgroundColor: '#F7B7CD',
      },
    ],
  };

  // @ts-ignore
  return <Bar options={options} data={data} />;
};

export default OAColumnChart;
