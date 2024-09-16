import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 40, 35, 50, 60, 70],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

function App() {
  return (
    <div className='flex h-screen bg-gray-100'>
      <aside className='w-64 bg-gray-800 text-white'>
        <div className='p-4 text-xl font-bold'>Dashboard</div>
        <nav>
          <ul>
            <li className='p-4 hover:bg-gray-700'>
              <a href='#'>Dashboard</a>
            </li>
            <li className='p-4 hover:bg-gray-700'>
              <a href='#'>Reports</a>
            </li>
            <li className='p-4 hover:bg-gray-700'>
              <a href='#'>Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className='flex-1 p-6'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold'>Dashboard Overview</h1>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>
            Log Out
          </button>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
          <div className='bg-white p-4 rounded shadow'>
            <h2 className='text-xl font-semibold'>Total Sales</h2>
            <p className='text-3xl font-bold'>$45,678</p>
          </div>
          <div className='bg-white p-4 rounded shadow'>
            <h2 className='text-xl font-semibold'>Active Users</h2>
            <p className='text-3xl font-bold'>1,234</p>
          </div>
          <div className='bg-white p-4 rounded shadow'>
            <h2 className='text-xl font-semibold'>Monthly Revenue</h2>
            <p className='text-3xl font-bold'>$12,345</p>
          </div>
        </div>
        <div className='bg-white p-4 rounded shadow mb-6'>
          <h2 className='text-xl font-semibold mb-4'>Recent Transactions</h2>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-left'>Date</th>
                <th className='px-4 py-2 text-left'>Description</th>
                <th className='px-4 py-2 text-left'>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2'>2024-09-01</td>
                <td className='px-4 py-2'>Payment</td>
                <td className='px-4 py-2'>$1,200</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>2024-09-05</td>
                <td className='px-4 py-2'>Subscription</td>
                <td className='px-4 py-2'>$500</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className='bg-white p-4 rounded shadow'>
          <h2 className='text-xl font-semibold mb-4'>Sales Trends</h2>
          <div className='h-64'>
            <Line data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
