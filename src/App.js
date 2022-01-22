import React, { useState } from 'react';
import Sidebar from './components/sidebar_left/Sidebar'
import TopNav from './components/topbar/TopNav'
import Home from './pages/home/Home'
import LoginForm from './components/LoginForm/LoginForm'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Equipment from './pages/equipment/Equipment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/detail/Details'
import Update from './pages/update/Update'
import AddEquipment from './pages/add equipment/AddEquipment';

import './App.css'

function App() {
  // const adminUser = {
  //   userName: "son",
  //   email: "admin@admin.com",
  //   password: "son123"
  // }
  // const [user, setUser] = useState({ name: "", password: "" });
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);

  //   if (details.name === adminUser.userName && details.password === adminUser.password) {
  //     console.log("LOGGED IN")
  //     setUser({
  //       name: details.name,
  //       password: details.password
  //     })
  //   } else {
  //     console.log("Details do not match");
  //     setError("Sai mật khẩu hoặc tên đăng nhập");
  //   }
  // }
  // const Logout = () => {
  //   setUser({ name: "", password: "" })
  // }
  return (
    <div className="App">
      <Router>
        {/* {(user.password !== "") ? ( */}
        <div className="container">
          <div className="sidebarLeft">
            <Sidebar />
            {/* <Sidebar Logout={Logout} /> */}
          </div>
          {/* <div className="HomePage"> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/equipments" element={<Equipment />} />
            <Route path="/equipments/detail/:detailID" element={<Details />} />
            <Route path="/equipments/update/:updateID" element={<Update />} />
            <Route path="/equipments/add-equipment/" element={<AddEquipment />} />

          </Routes>
          {/* </div> */}
        </div>
        {/* ) : (
          <LoginForm Login={Login} error={error} />
        )} */}
      </Router>
    </div >
  );
}

export default App;
{/* <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/equipment" element={<Equipment />} />
          </Routes>
        </div>
      </Router >
    </div > */}
