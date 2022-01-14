import React from 'react';
import Sidebar from './components/sidebar_left/Sidebar'
import Home from './pages/home/Home'
import TopNav from './components/topbar/TopNav'
import SidebarRight from './components/sidebar_right/SidebarRight'

import './App.css'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="sidebarLeft">
          <Sidebar />
        </div>
        <div className="HomePage">
          <TopNav />
          <Home />
        </div>
        <div className="sidebarRight">
          <SidebarRight />
        </div>

      </div>
    </div >
  );
}

export default App;
