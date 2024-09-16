import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
