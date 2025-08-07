import React, { useState } from 'react';
import Main from '../Components/Main';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Newconect');

  return (
    <div className="min-h-screen bg-base-300">
      <Main 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
};

export default Dashboard;