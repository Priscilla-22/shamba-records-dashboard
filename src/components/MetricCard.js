import React from 'react';

function MetricCard({ metric, bgColor, iconSrc, maxValue = 10000 }) {
  // Calculate the width of the progress bar based on the value and max value
  const progressWidth = (metric.value / maxValue) * 100;

  return (
    <div className='relative bg-white p-4 rounded-lg shadow-md w-56'>
      {/* Icon with a colored background and popping out effect */}
      <div
        className='absolute -top-5 right-2 p-2 rounded-lg'
        style={{
          backgroundColor: bgColor,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
        }}
      >
        <img src={iconSrc} alt='Icon' className='w-10 h-8 object-cover' />
      </div>

      <h2 className='text-lg font-bold mt-4'>{metric.label}</h2>

      {/* Horizontal line representing the metric range */}
      <div className='relative w-full h-1 bg-gray-200 rounded-full mt-1 mb-1'>
        <div
          className='absolute h-1 bg-custom-green rounded-full'
          style={{ width: `${progressWidth}%` }}
        />
      </div>

      <p className='text-2xl'>{metric.value.toLocaleString()}</p>
    </div>
  );
}

export default MetricCard;
