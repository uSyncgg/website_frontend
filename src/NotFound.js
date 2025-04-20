import React from 'react';
import { Helmet } from "react-helmet";


const NotFound = () => {
  return (
    <>
      <meta name="robots" content="noindex" />
        <Helmet>
          <meta name="description" content="Error 404. We cannot find the page you are searching for. Please try again or contact us." />
        </Helmet>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found.</p>
      <a to="/" className="text-blue-400 hover:underline">
        Back to Home
      </a>
    </div>
    </>
  );
};

export default NotFound;