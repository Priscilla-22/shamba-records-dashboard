import React, { useState } from 'react';
import { TfiMenuAlt } from 'react-icons/tfi';
import { CiMenuKebab } from 'react-icons/ci';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-grow flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'ml-48' : 'ml-20'
        }`}
      >
        <Navbar />

        <div className='flex-grow overflow-y-auto mt-16'>
          <Dashboard />
        </div>

        {/* Sidebar Toggle Button */}
        <div
          className={`fixed top-4 z-50 transition-all duration-300 ${
            isSidebarOpen ? 'left-52' : 'left-20'
          }`}
        >
          <button
            onClick={toggleSidebar}
            className='bg-gray-800 text-white p-2 rounded-full focus:outline-none'
          >
            {isSidebarOpen ? (
              <TfiMenuAlt size={24} />
            ) : (
              <CiMenuKebab size={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}


export default App;
