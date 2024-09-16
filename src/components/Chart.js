import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

function Chart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:4000/chartData')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch chart data');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setChartData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    // Hard-coded data
    const data = [
      { label: 'Jan', value: 100 },
      { label: 'Feb', value: 200 },
      { label: 'Mar', value: 300 },
    ];
    setChartData(data);
    setLoading(false);
  }, []);


  if (loading) {
    return <div>Loading chart...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-white p-4 rounded shadow-md'>
      <h2 className='text-lg font-bold'>Trends Over Time</h2>
      <LineChart width={400} height={200} data={chartData}>
        <Line type='monotone' dataKey='value' stroke='#8884d8' />
        <XAxis dataKey='label' />
        <YAxis />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default Chart;
