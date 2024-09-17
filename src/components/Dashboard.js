import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import DataTable from './DataTable';
import Chart from './Chart';

const cardDetails = [
  {
    label: 'Total Sales',
    value: 2000,
    bgColor: '#F0E68C',
    iconSrc: 'icons-bar-chart.png',
  },
  {
    label: 'Active users',
    value: 2000,
    bgColor: '#CFE2F3',
    iconSrc: 'icons-user.png',
  },
  {
    label: 'Total Farmers Supported',
    value: 10000,
    bgColor: '#FFDDC1',
    iconSrc: 'fluency-farmer.png',
  },
  {
    label: 'Total Loans Disbursed',
    value: 2000,
    bgColor: '#CFE2F3',
    iconSrc: '/icon-total-sale.png',
  },
  {
    label: 'Market Linkages Established',
    value: 150,
    bgColor: '#D9EAD3',
    iconSrc: '/icon-linkage.png',
  },
];

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
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
      <h1 className='text-2xl font-bold ml-8'>Dashboard</h1>
      <div className='flex flex-wrap gap-6 mt-4 mb-4'>
        {cardDetails.map((card, index) => (
          <MetricCard
            key={index}
            metric={{ label: card.label, value: card.value }}
            bgColor={card.bgColor}
            iconSrc={card.iconSrc}
          />
        ))}
      </div>
      <div className='flex gap-4'>
        <div className='flex-1'>
          <Chart />
        </div>
        <div className='flex-1'>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
