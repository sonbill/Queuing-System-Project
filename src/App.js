import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';


function App() {
  return (
    <div className="App">
      <Routes>
        Route<Dashboard />
        <Customers />

      </Routes>
    </div >
  );
}

export default App;
