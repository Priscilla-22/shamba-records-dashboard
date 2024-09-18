import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(LineElement, CategoryScale, LinearScale);

const Reports = () => {
  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    reportType: '',
  });
  const [data, setData] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/db.json');
        setData(response.data.reports); 
        setFilteredReports(response.data.reports); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterReports = () => {
      if (!Array.isArray(data)) return; 

      const result = data.filter((report) => {
        return (
          (!filter.startDate ||
            new Date(report.date) >= new Date(filter.startDate)) &&
          (!filter.endDate ||
            new Date(report.date) <= new Date(filter.endDate)) &&
          (!filter.reportType || report.report === filter.reportType)
        );
      });

      setFilteredReports(result);
    };

    filterReports();
  }, [filter, data]);

  const chartData = {
    labels: filteredReports.map((report) => report.date),
    datasets: [
      {
        label: 'Report Amount',
        data: filteredReports.map((report) =>
          parseFloat(report.amount.replace('$', '').replace(',', ''))
        ),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='p-4'>
      <header className='mb-4'>
        <h1 className='text-2xl font-bold'>Reports</h1>
        <p className='text-gray-600'>View and manage your reports here.</p>
      </header>

      <div className='mb-4 p-4 shadow-md bg-white'>
        <div className='flex space-x-4'>
          <label className='flex-1'>
            <span className='text-gray-700'>Start Date:</span>
            <input
              type='date'
              name='startDate'
              value={filter.startDate}
              onChange={handleFilterChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </label>
          <label className='flex-1'>
            <span className='text-gray-700'>End Date:</span>
            <input
              type='date'
              name='endDate'
              value={filter.endDate}
              onChange={handleFilterChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </label>
          <label className='flex-1'>
            <span className='text-gray-700'>Report Type:</span>
            <input
              type='text'
              name='reportType'
              value={filter.reportType}
              onChange={handleFilterChange}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </label>
          <div className='flex-shrink-0'>
            <button className='bg-green-700 text-white p-2 rounded-md flex items-center'>
              <FaFilter className='mr-2' /> Apply Filters
            </button>
          </div>
        </div>
      </div>

      <div className='flex mb-4 mt-10'>
        <div className='w-1/2 pr-4'>
          <h2 className='text-xl font-semibold mb-2'>Report Data</h2>
          <table className='w-full border-collapse border border-gray-200'>
            <thead>
              <tr className='bg-gray-800 text-white'>
                <th className='border border-gray-300 p-2'>Date</th>
                <th className='border border-gray-300 p-2'>Report</th>
                <th className='border border-gray-300 p-2'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(filteredReports) &&
                filteredReports.map((report) => (
                  <tr key={report.id}>
                    <td className='border border-gray-300 p-2'>
                      {report.date}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {report.report}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {report.amount}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className='w-1/2 pl-4'>
          <h2 className='text-xl font-semibold mb-2'>Report Trends</h2>
          <div className='bg-[#05122c] p-4 border rounded-lg shadow-md'>
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
