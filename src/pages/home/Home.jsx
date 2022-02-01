import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import SidebarRight from '../../components/sidebar_right/SidebarRight'
import TopNav from '../../components/topbar/TopNav'
import Sidebar from '../../components/sidebar_left/Sidebar'


import './home.css'

function Home() {
    return (
        <div className="home">
            <Sidebar style={{ width: 270 }} />
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
    )
}
export default Home
