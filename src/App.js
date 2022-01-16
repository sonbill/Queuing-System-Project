import React from 'react';
import Sidebar from './components/sidebar_left/Sidebar'
import Home from './pages/home/Home'

import './App.css'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="sidebarLeft">
          <Sidebar />
        </div>
        <div className="HomePage">
          <Home />
        </div>
      </div>
    </div >
  );
}

export default App;
