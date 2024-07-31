import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
