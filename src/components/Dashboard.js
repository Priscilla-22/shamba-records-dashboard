import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import DataTable from './DataTable';
import Chart from './Chart';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await fetch('/db.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCardDetails(data.cardDetails); 
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, []);

  if (loading) {
    return <div>Loading metrics...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='p-2'>
      <div className='grid gap-6 mt-4 mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'>
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
