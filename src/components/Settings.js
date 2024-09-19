import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert('Settings saved!');
  };

  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNotificationChange = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <div
      className={`p-4 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : ' text-black'
      }`}
    >
      <header className='mb-4'>
        <h1 className='text-2xl font-bold'>Settings</h1>
      </header>

      {/* Flex layout for theme and notification settings */}
      <div className='flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4'>
        {/* Theme Settings */}
        <div className='p-4 border rounded-lg w-full md:w-1/2'>
          <h2 className='text-xl font-semibold mb-2'>Theme Settings</h2>
          <button
            onClick={handleThemeChange}
            className='bg-custom-smokeWhite text-green-800 p-2 rounded-md'
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>

        {/* Notification Settings */}
        <div className='p-4 border rounded-lg w-full md:w-1/2'>
          <h2 className='text-xl font-semibold mb-2'>Notification Settings</h2>
          <label className='inline-flex items-center'>
            <input
              type='checkbox'
              checked={notifications}
              onChange={handleNotificationChange}
              className='form-checkbox'
            />
            <span className='ml-2'>Enable Notifications</span>
          </label>
        </div>
      </div>

      {/* Buttons for Save and Cancel */}
      <div className='flex justify-end space-x-4 mt-4'>
        <button
          onClick={handleSave}
          className='bg-green-500 text-white p-2 rounded-md flex items-center'
        >
          <FaSave className='mr-2' /> Save Changes
        </button>
        <button className='bg-red-500 text-white p-2 rounded-md flex items-center'>
          <FaTimes className='mr-2' /> Cancel
        </button>
      </div>
    </div>
  );
};

export default Settings;
