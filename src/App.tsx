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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    /* y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    }, */
  },
};

const labels = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

export const data = {
  labels,
  datasets: [
    {
      label: 'ReactJS',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000e3 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'VueJS',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000e3 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
  ],
};

export function App() {
  return (
  <>
    <div style={{ 'width': '50%', 'height': '400px', margin: 'auto'}}>
      <Line options={options} data={data} />
    </div>
    <div>
    
    </div>
  </>
    );
}
