import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found.</p>
      <a to="/" className="text-blue-400 hover:underline">
        Go back home
      </a>
    </div>
  );
};

export default NotFound;