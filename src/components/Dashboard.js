import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import DataTable from './DataTable';
import Chart from './Chart';

const cardDetails = [
  {
    label: 'Total Farmers Supported',
    value: 10000,
    bgColor: '#FFDDC1',
    // iconSrc: ' /active-farmer.png',
    iconSrc: ' fluency-farmer.png',
  },
  {
    label: 'Total Loans Disbursed',
    value: 2000000,
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
      <div className='flex flex-wrap gap-4 mt-4'>
        {cardDetails.map((card, index) => (
          <MetricCard
            key={index}
            metric={{ label: card.label, value: card.value }}
            bgColor={card.bgColor}
            iconSrc={card.iconSrc}
          />
        ))}
      </div>
      <DataTable />
      <Chart />
    </div>
  );
}

export default Dashboard;
