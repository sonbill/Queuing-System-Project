import React, { useState } from 'react';
import TopNav from '../../components/topbar/TopNav'
import Dropdown from '../../components/Dropdown/Dropdown'
import Sidebar from '../../components/sidebar_left/Sidebar'
import { Link } from 'react-router-dom'

import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import './addAccount.css'

export default function AddAccount() {
  const [role, setRole] = useState('Chọn vai trò');
  const [status, setStatus] = useState('Hoạt động');

  const [newFullname, setNewFullname] = useState([]);
  const [newUsername, setNewUsername] = useState([]);
  const [newPhone, setNewPhone] = useState([]);
  const [newEmail, setNewEmail] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "users");
    const payload = {
      activityStatus: '',
      email: newEmail,
      fullname: newFullname,
      role: '',
      username: newUsername,
      phone: newPhone,
    }
    await addDoc(collectionRef, payload);
    document.getElementById("accountFullname").value = "";
    document.getElementById("accountUsername").value = "";
    document.getElementById("accountPhone").value = "";
    document.getElementById("accountEmail").value = "";
  }


  return (
    <div className="addAccount">
      <Sidebar />
      <div className="addAccount__layout">
        <TopNav name={'Thêm tài khoản'} />
        <form onSubmit={handleSubmit}>
          <h1 className="addAccount__title">Quản lý tài khoản</h1>
          <div className="addAccount__infor">
            <h2 className="addAccount__infor__title">Thông tin tài khoản</h2>
            <div className="addAccount__list">
              <div className="addAccount__items">
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Họ tên<span>*</span></p>
                  <input type="text" placeholder="Nhập họ tên" className="addAccount__input" id="accountFullname" onChange={(e) => setNewFullname(e.target.value)} />
                </div>
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Tên đăng nhập:<span>*</span></p>
                  <input type="text" placeholder="Nhập tên đăng nhập" className="addAccount__input" id="accountUsername" onChange={(e) => setNewUsername(e.target.value)} />
                </div>
              </div>
              <div className="addAccount__items">
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Số điện thoại <span>*</span></p>
                  <input type="text" placeholder="Nhập số điện thoại" className="addAccount__input" id="accountPhone" onChange={(e) => setNewPhone(e.target.value)} />
                </div>
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Mật khẩu <span>*</span></p>
                  <input type="password" placeholder="Nhập mật khẩu" className="addAccount__input" />
                </div>
              </div>
              <div className="addAccount__items">
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Email <span>*</span></p>
                  <input type="text" placeholder="Nhập địa chỉ Email" className="addAccount__input" id="accountEmail" onChange={(e) => setNewEmail(e.target.value)} />
                </div>
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Nhập lại mật khẩu <span>*</span></p>
                  <input type="password" placeholder="Nhập lại mật khẩu" className="addAccount__input" />
                </div>
              </div>
              <div className="addAccount__items">
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Vai trò<span>*</span></p>
                  <Dropdown selected={role} setSelected={setRole} options={['Kế toán', 'Quản lý', 'Admin']} setWidth={{ width: 770 }} setHeight={{ height: 42 }} setPadding={{ padding: 6 }} />
                </div>
                <div className="addAccount__item">
                  <p className="addAccount__item__title">Tình trạng<span>*</span></p>
                  <Dropdown selected={status} setSelected={setStatus} options={['Tất cả', 'Ngưng hoạt động', 'Hoạt động']} setWidth={{ width: 770 }} setHeight={{ height: 42 }} setPadding={{ padding: 6 }} />
                </div>
              </div>
              <p className="addAccount__desc"><span>*</span> Là trường thông tin bắt buộc</p>
            </div>
          </div>
          <div className="addAccount__buttons">
            <Link to="/manage-account">
              <button className="addAccount__button addAccount__button-cancel">Huỷ bỏ</button>
            </Link>
            <button className="addAccount__button addAccount__button-add" >Thêm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
