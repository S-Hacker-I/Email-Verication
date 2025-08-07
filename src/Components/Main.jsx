import React from 'react';
import Newconect from './Newconect';
import History from './History';

const Main = ({activeTab}) => {
  return (
    <div className='p-4 sm:ml-72'>
      {activeTab === 'Newconect' && <Newconect />}
      {activeTab === 'History' && <History />}
    </div>
  );
};

export default Main;