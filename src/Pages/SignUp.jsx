import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Components/Auth';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-base-content">Create Account</h2>
          <p className="mt-2 text-base-content/60">
            Sign up for free to get started
          </p>
        </div>

        <Auth mode="signup" />

        <p className="text-center text-base-content/60">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary hover:text-primary-focus">
            Sign in
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

export default SignUp;