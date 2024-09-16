import React from 'react';

function Sidebar() {
  return (
    <div className='w-64 bg-custom-brown p-4'>
      {/* Logo and Shamba Records */}
      <div className='flex items-center mb-4'>
        <img
          src='../../public/shamba-records-logo.jpeg'
          alt='Shamba Records Logo'
          className='h-8 w-8 mr-2'
        />
        <h1 className='text-xl font-bold'>Shamba Records</h1>
      </div>

      <hr className='border-gray-300 mb-4 border-t-1' />

      {/* Profile Section */}
      <div className='flex items-center mb-6'>
        <img
          src='../../public/profile-pic.jpg'
          alt='Profile'
          className='h-12 w-12 rounded-full mr-3'
        />
        <div>
          <p className='text-lg font-semibold'>Priscilla Wakahia</p>
          <p className='text-sm text-gray-600'>Logged In</p>
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
