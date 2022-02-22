import React, { useState } from 'react';
import TopNav from '../../components/topbar/TopNav'
import Dropdown from '../../components/Dropdown/Dropdown'
import Sidebar from '../../components/sidebar_left/Sidebar'
import { Link } from 'react-router-dom'


import './updateAccount.css'

function UpdateAccount() {
  const [role, setRole] = useState('Chọn loại thiết bị');
  const [status, setStatus] = useState('Chọn loại thiết bị');

  return (
    <div className="updateAccount">
      <Sidebar />
      <div className="updateAccount__layout">
        <TopNav name={'Cập nhập tài khoản'} />
        <div>
          <h1 className="updateAccount__title">Quản lý tài khoản</h1>
          <div className="updateAccount__infor">
            <h2 className="updateAccount__infor__title">Thông tin tài khoản</h2>
            <div className="updateAccount__list">
              <div className="updateAccount__items">
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Họ tên<span>*</span></p>
                  <input type="text" placeholder="Nhập mã thiết bị" className="updateAccount__input" value={'Nguyễn Văn A'} />
                </div>
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Tên đăng nhập:<span>*</span></p>
                  <input type="text" placeholder="Nhập mã thiết bị" className="updateAccount__input" value={'tuyetnguyen123'} />
                </div>
              </div>
              <div className="updateAccount__items">
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Số điện thoại <span>*</span></p>
                  <input type="text" placeholder="Nhập số điện thoại" className="updateAccount__input" value={'0902345678'} />
                </div>
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Mật khẩu <span>*</span></p>
                  <input type="password" placeholder="Nhập mật khẩu" className="updateAccount__input" value={'Tuyetnguyen12'} />
                </div>
              </div>
              <div className="updateAccount__items">
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Email <span>*</span></p>
                  <input type="text" placeholder="Nhập địa chỉ Email" className="updateAccount__input" value={'NguyenA154@gmail.com'} />
                </div>
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Nhập lại mật khẩu <span>*</span></p>
                  <input type="password" placeholder="Nhập lại mật khẩu" className="updateAccount__input" value={'Tuyetnguyen12'} />
                </div>
              </div>
              <div className="updateAccount__items">
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Vai trò<span>*</span></p>
                  <Dropdown selected={role} setSelected={setRole} options={['Kế toán', 'Quản lý', 'Admin']} setWidth={{ width: 770 }} setHeight={{ height: 42 }} setPadding={{ padding: 6 }} />
                </div>
                <div className="updateAccount__item">
                  <p className="updateAccount__item__title">Tình trạng<span>*</span></p>
                  <Dropdown selected={status} setSelected={setStatus} options={['Tất cả', 'Ngưng hoạt động', 'Hoạt động']} setWidth={{ width: 770 }} setHeight={{ height: 42 }} setPadding={{ padding: 6 }} />
                </div>
              </div>
              <p className="updateAccount__desc"><span>*</span> Là trường thông tin bắt buộc</p>
            </div>
          </div>
          <div className="updateAccount__buttons">
            <Link to="/manage-account">
              <button className="updateAccount__button updateAccount__button-cancel">Huỷ bỏ</button>
            </Link>
            <button className="updateAccount__button updateAccount__button-update">Cập nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateAccount
