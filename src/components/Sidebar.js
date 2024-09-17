import React, { useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md'; // Dashboard icon
import { HiOutlineDocumentReport } from 'react-icons/hi'; // Report icon
import { FiSettings } from 'react-icons/fi'; // Settings icon

function Sidebar({ isSidebarOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`bg-custom-brown p-4 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-32'
      }`}
    >
      {/* Logo and Shamba Records */}
      <div
        className={`flex items-center mb-4 ${
          isSidebarOpen ? '' : 'justify-center'
        }`}
      >
        <img
          src='/shamba-records-logo1.png'
          alt='Shamba Records Logo'
          className={`h-10 w-10 ${isSidebarOpen ? 'mr-2' : ''}`}
        />
        {isSidebarOpen && (
          <h1 className='ml-4 text-xl text-white font-lemon tracking-wider'>
            Shamba Records
          </h1>
        )}
      </div>

      <hr className='border-gray-300 mb-4 border-t-1' />

      {/* Profile Section */}
      <div className='my-4'>
        <div
          className='flex items-center mb-2 cursor-pointer'
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
            <div>
              <p className='text-base font-medium text-custom-smokeWhite hover:text-white'>
                Priscilla Wakahia
              </p>
            </div>
          )}

          {/* Dropdown Icon */}
          <div className='ml-auto'>
            <div className='rounded-full p-1'>
              {isDropdownOpen ? (
                <IoMdArrowDropupCircle size={20} className='text-gray-800' />
              ) : (
                <IoMdArrowDropdownCircle size={20} className='text-gray-800' />
              )}
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isSidebarOpen && isDropdownOpen && (
          <div className='pl-14'>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#profile'
                  className='block px-4 text-custom-smokeWhite hover:text-white'
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href='#settings'
                  className='block px-4 text-custom-smokeWhite hover:text-white rounded'
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='#logout'
                  className='block px-4 text-custom-smokeWhite hover:text-white rounded'
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <hr className='border-gray-300 mb-4 border-t-1' />

      {/* Sidebar Navigation */}
      <ul className='mt-14'>
        <li>
          <a
            href='#'
            className='flex items-center py-2 px-4 text-lg text-custom-white hover:text-custom-orange rounded-lg mb-2'
          >
            <MdDashboard className='text-custom-orange text-3xl' />
            {isSidebarOpen && <span className='ml-3'>Dashboard</span>}
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center py-2 px-4 text-xl text-custom-white hover:text-custom-orange rounded-lg'
          >
            <HiOutlineDocumentReport className='text-custom-orange text-3xl my-2' />
            {isSidebarOpen && <span className='ml-3'>Reports</span>}
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center py-2 px-4 text-xl text-custom-white hover:text-custom-orange rounded-lg'
          >
            <FiSettings className='text-custom-orange text-3xl my-2' />
            {isSidebarOpen && <span className='ml-3'>Settings</span>}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
