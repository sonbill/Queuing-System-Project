import React, { useState } from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import SidebarRight from '../../components/sidebar_right/SidebarRight'
import TopNav from '../../components/topbar/TopNav'
import Sidebar from '../../components/sidebar_left/Sidebar'
import LoginForm from '../../components/LoginForm/LoginForm'


import './home.css'

function Home() {
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
            setError("Sai mật khẩu hoặc tên đăng nhập");
        }
    }
    const Logout = () => {
        setUser({ name: "", password: "" })
    }
    return (
        (user.password !== "") ? (
            <div className="home">
                <Sidebar style={{ width: 270 }} Logout={Logout} />
                <div className="home-layout">
                    <TopNav name={'Dashboard'} />
                    <div className="dashboardContent">
                        <div className="middle-content">
                            <h1 className="title">Biểu đồ cấp số</h1>
                            <FeaturedInfo />
                            <Chart />
                        </div>
                        <div className="right-content">
                            <SidebarRight />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <LoginForm Login={Login} error={error} />
        )
    );
}
export default Home
