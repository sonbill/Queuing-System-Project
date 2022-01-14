import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'

import './home.css'

function Home() {
    return (
        <div className="home">
            <h1 className="title">Biểu đồ cấp số</h1>
            <FeaturedInfo />
            <Chart />
        </div>
    )
}
export default Home
