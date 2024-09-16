import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import DataTable from './DataTable';
import Chart from './Chart';

function Dashboard() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:4000/metrics')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch metrics');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMetrics(data);
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
      { label: 'Total Sales', value: 1000 },
      { label: 'Active Users', value: 500 },
      { label: 'Monthly Revenue', value: 5000 },
    ];
    setMetrics(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading metrics...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <div className='flex flex-wrap -mx-4'>
        {metrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>
      <DataTable />
      <Chart />
    </div>
  );
}

export default Dashboard;
