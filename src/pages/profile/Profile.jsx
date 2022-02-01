import React from 'react';
import TopNav from '../../components/topbar/TopNav'
import Sidebar from '../../components/sidebar_left/Sidebar'
import useravatar from '../../assets/useravatar.png'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import './profile.css'

function Profile(username) {
  username = "Lê Quỳnh Ái Vân"
  return (
    <div className="profile">
      <Sidebar />
      <div className="profile__layout">
        <TopNav name={"Thông tin cá nhân"} />
        <div className="profile__wrapper">
          <div className="profile__img-details">
            <div className="profile__avatar">
              <img src={useravatar} alt="avatar" />
              <label>
                <CameraAltIcon className="profile__avatar-icon" style={{ fontSize: 45 }} />
                <input type="file" style={{ display: 'none' }} />
              </label>
              {/* <button>Change</button> */}
            </div>
            <h2 className="profile__username" >{username}</h2>
          </div>
          <div className="profile__info-details">
            <div className="profile__input-row">
              <div className="profile__input-row-detail">
                <p>Tên người dùng</p>
                <input type="text" placeholder={username} disabled />
              </div>
              <div className="profile__input-row-detail">
                <p>Tên đăng nhập</p>
                <input type="text" placeholder="lequynhhaivan01" disabled />
              </div>
            </div>
            <div className="profile__input-row">
              <div className="profile__input-row-detail" >
                <p>Số điện thoại</p>
                <input type="text" disabled />
              </div>
              <div className="profile__input-row-detail">
                <p>Mật khẩu</p>
                <input type="text" disabled />
              </div>
            </div>
            <div className="profile__input-row">
              <div className="profile__input-row-detail">
                <p>Email</p>
                <input type="email" disabled />
              </div>
              <div className="profile__input-row-detail">
                <p>Vai trò</p>
                <input type="text" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile
