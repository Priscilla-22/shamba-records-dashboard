import React, { useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

function Sidebar({ isSidebarOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`max-h-screen bg-green-800 text-white p-4 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-40'
      }`}
    >
      <div
        className={`flex items-center my-8 ${
          isSidebarOpen ? '' : 'justify-center'
        }`}
      >
        <img
          src='/shamba-records-logo1.png'
          alt='Shamba Records Logo'
          className={`h-10 w-10 ${isSidebarOpen ? 'mr-1' : 'mt-4'}`}
        />
        {isSidebarOpen && (
          <h1 className='ml-2 text-xl font-lemon tracking-wider'>Shamba Records</h1>
        )}
      </div>

      <hr className='border-gray-300 mb-4' />

      <div className='my-4'>
        <div
          className='flex items-center my-6 cursor-pointer'
          onClick={toggleDropdown}
        >
          <img
            src='/profile-pic2.avif'
            alt='Profile'
            className={`h-14 w-14 rounded-full mr-3 border-gray-300 border-4 object-cover object-center ${
              isSidebarOpen ? '' : 'h-12 w-12'
            }`}
          />
          {isSidebarOpen && (
            <p className='text-base font-medium'>Priscilla Wakahia</p>
          )}
          <div className='ml-auto'>
            {isDropdownOpen ? (
              <IoMdArrowDropupCircle size={20} />
            ) : (
              <IoMdArrowDropdownCircle size={20} />
            )}
          </div>
        </div>

        {isSidebarOpen && isDropdownOpen && (
          <div className='pl-14'>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#profile'
                  className='block px-4 py-2 hover:bg-green-700 rounded'
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href='#settings'
                  className='block px-4 py-2 hover:bg-green-700 rounded'
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='#logout'
                  className='block px-4 py-2 hover:bg-green-700 rounded'
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <hr className='border-gray-300 mb-4' />

      <ul className='mt-10'>
        <li>
          <a
            href='#dashboard'
            className='flex items-center py-2 mb-2 px-4 text-lg hover:bg-green-700 rounded'
          >
            <MdDashboard className='text-2xl' />
            {isSidebarOpen && <span className='ml-3'>Dashboard</span>}
          </a>
        </li>
    
        <li>
          <a
            href='#reports'
            className='flex items-center py-2 mb-2 px-4 text-lg hover:bg-green-700 rounded'
          >
            <HiOutlineDocumentReport className='text-2xl' />
            {isSidebarOpen && <span className='ml-3'>Reports</span>}
          </a>
        </li>
        <li>
          <a
            href='#settings'
            className='flex items-center py-2 px-4 text-lg hover:bg-green-700 rounded'
          >
            <FiSettings className='text-2xl' />
            {isSidebarOpen && <span className='ml-3'>Settings</span>}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
