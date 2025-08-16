import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="card card-title">404</h1>
      <p className="card card-text">Page Not Found</p>
      <p className="card card-text">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-2.5">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;