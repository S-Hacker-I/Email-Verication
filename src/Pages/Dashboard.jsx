import React, { useState } from 'react';
import Aside from '../Components/Aside';
import Main from '../Components/Main';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Newconect');
  return (
    <div className="min-h-screen bg-base-300">
      <Aside setActiveTab={setActiveTab} />

      <Main activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;