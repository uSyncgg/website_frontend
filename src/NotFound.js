import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white" style={{ paddingTop: '100px' }}>
      <h1 className="text-6xl font-bold mb-4 black-text">404 ERROR</h1>
      <p className="text-xl mb-6 black-text">Page not found.</p>
      <a href="/" className="text-blue-400 hover:underline">
        Go back home
      </a>
    </div>
  );
};

export default NotFound;