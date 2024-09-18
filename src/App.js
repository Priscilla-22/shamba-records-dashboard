import React, { useState } from 'react';
import { TfiMenuAlt } from 'react-icons/tfi';
import { CiMenuKebab } from 'react-icons/ci';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports'; 
import Navbar from './components/Navbar';
import Settings from "./components/Settings"
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLinkClick = (view) => {
      console.log(`Link clicked: ${view}`);

    setActiveView(view);
    if (!isSidebarOpen) {
      setIsSidebarOpen(true); 
    }
  };

  return (
    <div className='flex h-screen'>
      <Sidebar isSidebarOpen={isSidebarOpen} onLinkClick={handleLinkClick} />

      <div
        className={`flex-grow flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'ml-48' : 'ml-20'
        }`}
      >
        <Navbar />

        <div className='flex-grow overflow-y-auto mt-16'>
          {activeView === 'dashboard' && <Dashboard />}
          {activeView === 'reports' && <Reports />}
          {activeView === 'settings' && <Settings />}
        </div>

        <div
          className={`fixed top-4 z-10 transition-all duration-300 ${
            isSidebarOpen ? 'left-52' : 'left-24'
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
