import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa'; 
import '../index.css'; 

const Navbar = () => {
  return (
    <nav className=' p-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold ml-12 mt-1'>Dashboard</h1>
        <div className='relative ml-6'>
          <input
            type='text'
            placeholder='Search'
            className='pl-10 py-1 rounded-md border border-gray-200 focus:outline-none'
          />
          <FaSearch className='absolute left-3 top-2 text-gray-800' />
        </div>
      </div>

      <div className='relative flex items-center'>
        <div className='relative hover-notification mr-7'>
          <FaBell className='text-gray-800 text-2xl cursor-pointer' />
          <span className='absolute top-[-5px] right-[-10px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
            5
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
