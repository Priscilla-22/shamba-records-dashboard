import React from 'react';

function Sidebar() {
  return (
    <div className='w-64 bg-custom-brown p-4'>
      {/* Logo and Shamba Records */}
      <div className='flex items-center mb-4'>
        <img
          src='/shamba-records-logo1.png'
          alt='Shamba Records Logo'
          className='h-8 w-8 mr-2'
        />
        <h1 className='text-xl font-bold text-white'>Shamba Records</h1>
      </div>

      <hr className='border-gray-300 mb-4 border-t-1' />

      {/* Profile Section */}
      <div className='flex items-center mb-6'>
        <img
          src='/profile-pic2.avif'
          alt='Profile'
          className='h-14 w-14 rounded-full mr-3 border-gray-300 border-4 object-cover object-center'
        />
        <div>
          <p className='text-base font-medium text-custom-smokeWhite hover:text-white'>
            Priscilla Wakahia
          </p>
          {/* <p className='text-sm text-gray-600'>Logged In</p> */}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <h2 className='text-lg font-bold'>Sidebar</h2>
      <ul>
        <li>
          <a href='#' className='block py-2 px-4 hover:bg-gray-200'>
            Dashboard
          </a>
        </li>
        <li>
          <a href='#' className='block py-2 px-4 hover:bg-gray-200'>
            Reports
          </a>
        </li>
        <li>
          <a href='#' className='block py-2 px-4 hover:bg-gray-200'>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
