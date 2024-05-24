import React from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Dashboard from './components/Cards';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
