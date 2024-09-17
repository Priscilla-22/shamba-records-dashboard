import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

function Chart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Loan Disbursement Trends',
        data: [5000, 7000, 6000, 8000, 7500],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Amount: $${tooltipItem.raw.toLocaleString()}`;
          },
        },
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
      },
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: false, // Turn off the default title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
          font: { size: 14 },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount (in $)',
          font: { size: 14 },
        },
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className='p-4 rounded-lg shadow-md mt-4 bg-white'>
      <div className='bg-[#05122c] p-4 rounded-lg'>
        <Line data={data} options={options} />
      </div>
      <div className='mb-4'>
        <h2 className='mt-2 text-lg font-semibold text-gray-800 text-center'>
          Loan Disbursement Trends
        </h2>
        <p className='text-gray-600 mt-1'>
          This chart shows the trends in loan disbursements over the past few
          months. It helps in understanding how the amount of loans provided has
          varied and can be used to identify trends and make informed decisions.
        </p>
      </div>
    </div>
  );
}

export default Chart;
