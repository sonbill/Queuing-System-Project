import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'

import './App.css'

function App() {

  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div >
  );
}

export default App;
