import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Components/Auth';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-base-content">Welcome Back</h2>
          <p className="mt-2 text-base-content/60">
            Sign in to your account to continue
          </p>
        </div>

        <Auth mode="signin" />

        <p className="text-center text-base-content/60">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:text-primary-focus">
            Sign up
          </Link>
        </p>

        <div className="text-center">
          <Link to="/" className="text-sm text-base-content/60 hover:text-base-content">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;