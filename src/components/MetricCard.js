import React from 'react';

function MetricCard({ metric }) {
  return (
    <div className='bg-white p-4 rounded shadow-md'>
      <h2 className='text-lg font-bold'>{metric.label}</h2>
      <p className='text-2xl'>{metric.value}</p>
    </div>
  );
}

export default MetricCard;
