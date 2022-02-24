import React, { useState } from 'react';
// import Sidebar from './components/sidebar_left/Sidebar'
// import TopNav from './components/topbar/TopNav'
import Home from './pages/home/Home'
// import LoginForm from './components/LoginForm/LoginForm'
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Equipment from './pages/equipment/Equipment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/detail/Details'
import UpdateEquipment from './pages/updateEquipment/UpdateEquipment'
import AddEquipment from './pages/add equipment/AddEquipment';
import Profile from './pages/profile/Profile'
import ErrorPage from './pages/ErrorPage';
import Service from './pages/service_page/Service'
import AddService from './pages/add service/AddService'
import UpdateService from './pages/update service/UpdateService'
import DetailService from './pages/detail service/DetailService'
import ProvideNumbers from './pages/Provides Ordinal Numbers/OrdinalNumbers'
import ProvideNewNumbers from './pages/provide new number/ProvideNewNumbers'
import Report from './pages/report/Report'
import Roles from './pages/Roles/Role'
import UpdateRole from './pages/update role/UpdateRole'
import ManageAccount from './pages/manage account/ManageAccount'
import UpdateAccount from './pages/update account/UpdateAccount'
import AddAccount from './pages/add account/AddAccount'
import UserDiary from './pages/user diary/UserDiary'
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
        {/* <div className="container">

          <div className="sidebarLeft">
            <Sidebar /> */}
        {/* <Sidebar Logout={Logout} /> */}
        {/* </div> */}
        {/* <div className="HomePage"> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/equipments" element={<Equipment />} />
          <Route path="/equipments/detail/:detailID" element={<Details />} />
          <Route path="/equipments/update/:updateID" element={<UpdateEquipment />} />
          <Route path="/equipments/add-equipment/" element={<AddEquipment />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/add-service/" element={<AddService />} />
          <Route path="/services/detail/:detailID" element={<DetailService />} />
          <Route path="/services/update/:updateID" element={<UpdateService />} />
          <Route path="/provide-numbers" element={<ProvideNumbers />} />
          <Route path="/provide-numbers/new-number" element={<ProvideNewNumbers />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/update-role/:updateID" element={<UpdateRole />} />
          <Route path="/manage-account" element={<ManageAccount />} />
          <Route path="/manage-account/update/:updateID" element={<UpdateAccount />} />
          <Route path="/manage-account/add-account" element={<AddAccount />} />
          <Route path="/diary-activities" element={<UserDiary />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* </div> */}
        {/* </div> */}
        {/* ) : (
          <LoginForm Login={Login} error={error} />
        )} */}
      </Router>
    </div >
  );
}

export default App;

