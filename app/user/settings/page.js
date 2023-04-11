"use client"
import React, { useState } from 'react';

function SettingsPage(props) {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [address, setAddress] = useState(props.address);

  const handleSave = () => {
    // Send updated user data to the server
    console.log('Saving user data...');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-5 text-center">Settings</h1>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-gray-500  mb-1 rounded-md shadow-sm w-full py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-500  mb-1 rounded-md shadow-sm w-full py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-medium mb-2">
            Address:
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border-gray-500  mb-1 rounded-md shadow-sm w-full py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default SettingsPage;
