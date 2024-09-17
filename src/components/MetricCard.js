import React from 'react';

function MetricCard({ metric, bgColor, iconSrc }) {
  return (
    <div className='relative bg-white p-4 rounded-lg shadow-md w-60'>
      {/* Icon with a colored background and popping out effect */}
      <div
        className='absolute -top-5 right-2 p-2 rounded-lg'
        style={{
          backgroundColor: bgColor,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          zIndex: 10, 
        }}
      >
        <img src={iconSrc} alt='Icon' className='w-12 h-12 object-cover' />
      </div>

      <h2 className='text-lg font-bold'>{metric.label}</h2>
      <p className='text-2xl'>{metric.value.toLocaleString()}</p>
    </div>
  );
}

export default MetricCard;
