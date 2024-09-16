import React from 'react';

function Sidebar() {
  return (
    <div className='w-64 bg-gray-100 p-4'>
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
