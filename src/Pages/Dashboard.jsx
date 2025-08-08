import React, { useState } from 'react';
import { useAuth } from '../context/authcontext';
import Main from '../Components/Main';
import { FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Newconect');
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-base-300">
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <span className="text-xl font-bold px-4">Dashboard</span>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={user?.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email}`}
                />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="menu-title px-4 py-2">
                <span className="text-sm opacity-50">Signed in as</span>
                <span className="font-medium truncate">{user?.email}</span>
              </li>
              <div className="divider my-0"></div>
              <li>
                <button onClick={handleSignOut} className="text-error">
                  <FiLogOut />
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Main 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
};

export default Dashboard;