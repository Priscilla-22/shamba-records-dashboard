import React, { useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ isSidebarOpen, onLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const SidebarItem = ({ href, icon: Icon, text, onClick }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault(); 
        onClick(text.toLowerCase()); 
      }}
      className='flex items-center py-2 px-4 mb-2 text-lg hover:bg-green-700 rounded'
      style={{ minWidth: isSidebarOpen ? '100%' : '3.3rem' }}
    >
      <Icon className='text-2xl' />
      {isSidebarOpen && <span className='ml-3'>{text}</span>}
    </a>
  );

  return (
    <div
      className={`fixed top-0 left-0 z-20 h-screen bg-green-800 text-white p-4 transition-all duration-300 ${
        isSidebarOpen ? 'w-48' : 'w-20'
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
          <h1 className='ml-2 text-xl font-lemon tracking-wider'>
            Shamba Records
          </h1>
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
            <>
              <p className='text-base font-medium'>Priscilla Wakahia</p>
              <div className='ml-auto'>
                {isDropdownOpen ? (
                  <IoMdArrowDropupCircle size={20} />
                ) : (
                  <IoMdArrowDropdownCircle size={20} />
                )}
              </div>
            </>
          )}
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
          <SidebarItem
            href='#dashboard'
            icon={MdDashboard}
            text='Dashboard'
            onClick={onLinkClick}
          />
        </li>
        <li>
          <SidebarItem
            href='#reports'
            icon={HiOutlineDocumentReport}
            text='Reports'
            onClick={onLinkClick}
          />
        </li>
        <li>
          <SidebarItem
            href='#settings'
            icon={FiSettings}
            text='Settings'
            onClick={onLinkClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
