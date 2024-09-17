import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
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
            // Customizing tooltip label
            return `Amount: ${tooltipItem.raw.toLocaleString()}`;
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
        display: true,
        text: 'Loan Disbursement Trends',
        font: { size: 18 },
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
    <div className='bg-white p-4 rounded shadow-md mt-4'>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
