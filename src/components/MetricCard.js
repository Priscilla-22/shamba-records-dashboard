import React from 'react';

function MetricCard({ metric, gradient, iconSrc, maxValue = 10000 }) {
  const progressWidth = (metric.value / maxValue) * 100;

  return (
    <div
      className='relative p-4 rounded-lg shadow-md w-56'
      style={{
        background: gradient, 
      }}
    >
      <div
        className='absolute -top-3 right-2 p-2 rounded-lg'
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
        }}
      >
        <img src={iconSrc} alt='Icon' className='w-8 h-6 object-cover' />
      </div>

      <h2 className='text-base font-bold mt-4'>{metric.label}</h2>

      <div className='relative w-full h-1 bg-gray-200 rounded-full mt-1 mb-1'>
        <div
          className='absolute h-1 bg-custom-green rounded-full'
          style={{ width: `${progressWidth}%` }}
        />
      </div>

      <p className='text-lg'>{metric.value.toLocaleString()}</p>
    </div>
  );
}

export default MetricCard;
