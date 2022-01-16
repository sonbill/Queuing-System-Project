import React from 'react'

import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import ForumIcon from '@mui/icons-material/Forum';
import LayersIcon from '@mui/icons-material/Layers';

import CalendarComponents from './calendar'
import './sidebar-right.css'


function Sidebar_Right() {
  return (
    <div className="sidebar-right">
      <h1 style={{ color: '#FF7506', marginBottom: 16 }}>Tổng quan</h1>
      <div className="featuredTotal">
        <ul className='featuredTotalList'>
          {/* 01 */}
          <li className="featuredTotalItem">
            <div className="totalChart"></div>
            <div className="totalNumberDetails">
              <span className="totalNumber">4.221</span>
              <div className="totalNumberIcon" style={{ color: '#FF7506' }}>
                <DesktopMacIcon />
                <p>Thiết bị</p>
              </div>
            </div>
            <div className="totalStatus">
              <div className="activeDetails">
                <p className="activeStatus">Đang hoạt động</p>
                <span className="numberStatus" style={{ color: '#FF7506' }}>3.799</span>
              </div>
              <div className="notActiveDetails">
                <p className="notActiveStatus">Ngưng hoạt động</p>
                <span className="numberStatus" style={{ color: '#FF7506' }} > 3.799</span>
              </div>
            </div>
          </li>
          {/* 02 */}
          <li className="featuredTotalItem">
            <div className="totalChart"></div>
            <div className="totalNumberDetails">
              <span className="totalNumber">4.221</span>
              <div className="totalNumberIcon" style={{ color: '#4277FF' }}>
                <ForumIcon />
                <p>Dịch vụ</p>
              </div>
            </div>
            <div className="totalStatus">
              <div className="activeDetails">
                <p className="activeStatus">Đang hoạt động</p>
                <span className="numberStatus" style={{ color: '#4277FF' }} > 3.799</span>
              </div>
              <div className="notActiveDetails">
                <p className="notActiveStatus">Ngưng hoạt động</p>
                <span className="numberStatus" style={{ color: '#4277FF' }} > 3.799</span>
              </div>
            </div>
          </li >
          {/* 03 */}
          <li li className="featuredTotalItem" >
            <div className="totalChart"></div>
            <div className="totalNumberDetails">
              <span className="totalNumber">4.221</span>
              <div className="totalNumberIcon" style={{ color: '#35C75A' }}>
                <LayersIcon />
                <p>Dịch vụ</p>
              </div>
            </div>
            <div className="totalStatus">
              <div className="activeDetails">
                <p className="activeStatus">Đang chờ</p>
                <span className="numberStatus" style={{ color: '#35C75A' }}>3.799</span>
              </div>
              <div className="notActiveDetails">
                <p className="notActiveStatus">Đã sử dụng</p>
                <span className="numberStatus" style={{ color: '#35C75A' }}>3.799</span>
              </div>
              <div className="notActiveDetails">
                <p className="notActiveStatus">Bỏ qua</p>
                <span className="numberStatus" style={{ color: '#35C75A' }}>3.799</span>
              </div>
            </div>
          </li >
        </ul >
        <div className="calendar">
          <CalendarComponents />
        </div>
      </div >
    </div >
  )
}
export default Sidebar_Right
