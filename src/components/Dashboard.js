import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import DataTable from './DataTable';
import Chart from './Chart';

const cardDetails = [
  {
    label: 'Total Sales',
    value: 2000,
    gradient: 'linear-gradient(90deg, #F0E68C 0%, #FFF8DC 100%)',
    iconSrc: 'icons-bar-chart.png',
  },
  {
    label: 'Active Users',
    value: 2000,
    gradient: 'linear-gradient(90deg, #CFE2F3 0%, #EAF3F7 100%)',
    iconSrc: 'icons-user.png',
  },
  {
    label: 'Total Farmers Supported',
    value: 10000,
    gradient: 'linear-gradient(90deg, #FFDDC1 0%, #FFF1E6 100%)',
    iconSrc: 'fluency-farmer.png',
  },
  {
    label: 'Total Loans Disbursed',
    value: 2000,
    gradient: 'linear-gradient(90deg, #C6A8A0 0%, #E2D3D1 100%)',
    iconSrc: '/icon-total-sale.png',
  },
  {
    label: 'Market Linkages',
    value: 1500,
    gradient: 'linear-gradient(90deg, #D9EAD3 0%, #EDF7ED 100%)',
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
    <div className='p-2'>
      <div className='grid gap-6 ml-6 mt-4  mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'>
        {cardDetails.map((card, index) => (
          <MetricCard
            key={index}
            metric={{ label: card.label, value: card.value }}
            gradient={card.gradient}
            iconSrc={card.iconSrc}
          />
        ))}
      </div>
      <div className='flex flex-col lg:flex-row gap-4'>
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
