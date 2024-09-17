import React, { useState } from 'react';
import { TfiMenuAlt } from 'react-icons/tfi'; // Import the hamburger menu icon
import { CiMenuKebab } from 'react-icons/ci'; // Import the three dots icon
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex h-screen bg-custom-smokeWhite'>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? 'ml-4 ' : 'ml-2'
        }`}
      >
        <Dashboard />
      </div>

      {/* Toggle Button */}
      <div
        className={`absolute top-4 ml-14 transition-all duration-300 ${
          isSidebarOpen ? 'left-36' : 'left-16'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className='bg-gray-800 text-white p-2 rounded-full focus:outline-none'
        >
          {isSidebarOpen ? <TfiMenuAlt size={24} /> : <CiMenuKebab size={24} />}
        </button>
      </div>
    </div>
  );
}

export default App;
