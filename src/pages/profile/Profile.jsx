import React from 'react';
import TopNav from '../../components/topbar/TopNav'
import Sidebar from '../../components/sidebar_left/Sidebar'

import './profile.css'

function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profile-layout">
        <TopNav name={"Thông tin cá nhân"} />
        <div className="profile-wrapper">
          <div className="profile-img-details">

          </div>
          <div className="profile-info-details">
            <div className="profile-input-row">
              <div className="profile-input-row-detail">
                <p>Tên người dùng</p>
                <input type="text" />
              </div>
              <div className="profile-input-row-detail">
                <p>Tên đăng nhập</p>
                <input type="text" />
              </div>
            </div>
            <div className="profile-input-row">
              <div className="profile-input-row-detail">
                <p>Số điện thoại</p>
                <input type="text" />
              </div>
              <div className="profile-input-row-detail">
                <p>Mật khẩu</p>
                <input type="text" />
              </div>
            </div>
            <div className="profile-input-row">
              <div className="profile-input-row-detail">
                <p>Email</p>
                <input type="email" />
              </div>
              <div className="profile-input-row-detail">
                <p>Vai trò</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile
