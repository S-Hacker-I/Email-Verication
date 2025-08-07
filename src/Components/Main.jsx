import React, { useState } from 'react';
import Newconect from './Newconect';
import History from './History';
import Aside from './Aside';

const Main = ({ activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      <Aside
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="p-4 lg:p-6 transition-all duration-300 lg:ml-72">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'Newconect' && <Newconect />}
          {activeTab === 'History' && <History />}
        </div>
      </main>
    </div>
  );
};

export default Main;