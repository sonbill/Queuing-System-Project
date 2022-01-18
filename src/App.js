import React, { useState } from 'react';
import Sidebar from './components/sidebar_left/Sidebar'
import Home from './pages/home/Home'
import LoginForm from './components/LoginForm/LoginForm'

import './App.css'

function App() {
  const adminUser = {
    userName: "son",
    email: "admin@admin.com",
    password: "son123"
  }
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.name === adminUser.userName && details.password === adminUser.password) {
      console.log("LOGGED IN")
      setUser({
        name: details.name,
        password: details.password
      })
    } else {
      console.log("Details do not match");
      setError("Details do not match")
    }
  }
  const Logout = () => {
    setUser({ name: "", password: "" })
  }
  return (
    <div className="App">
      {(user.password !== "") ? (
        <div className="container">
          <div className="sidebarLeft">
            <Sidebar Logout={Logout} />
          </div>
          <div className="HomePage">
            <Home />
          </div>
        </div>
        // <div className="welcome">
        //   <h2> Welcome, <span>{user.name}</span></h2>
        //   <button onClick={Logout}>Logout</button>
        // </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div >
  );
}

export default App;
