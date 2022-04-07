import React, { useState, useEffect } from 'react';
import TopNav from '../../components/topbar/TopNav'
import Dropdown from '../../components/Dropdown/Dropdown'
import Sidebar from '../../components/sidebar_left/Sidebar'
import { Link } from 'react-router-dom'

import { db } from '../../firebase-config'
import { useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from 'firebase/firestore'


import './updateAccount.css'

function UpdateAccount() {
  const [role, setRole] = useState('Kế toán');
  const [status, setStatus] = useState('Ngưng hoạt động');

  const [updateAccounts, setUpdateAccounts] = useState([]);

  const params = useParams()
  const updateID = params.updateID

  const userData = async () => {
    const docRef = doc(db, "users", updateID);
    const docSnap = await getDoc(docRef);
    setUpdateAccounts({ ...docSnap.data(), id: docSnap.id })
  }

  useEffect(() => {
    userData();
  }, []);

  const [newFullname, setNewFullname] = useState([]);
  const [newUsername, setNewUsername] = useState([]);
  const [newPhone, setNewPhone] = useState([]);
  const [newEmail, setNewEmail] = useState([]);
  const [newPassword, setNewPassword] = useState([]);

  const handleEdit = async (id) => {

    const docRef = doc(db, 'users', id)
    const payload = { fullname: newFullname, username: newUsername, phone: newPhone, email: newEmail, password: newPassword }

    updateDoc(docRef, payload);

    document.getElementById("accountFullname").value = "";
    document.getElementById("accountUsername").value = "";
    document.getElementById("accountPhone").value = "";
    document.getElementById("accountEmail").value = "";
    document.getElementById("accountPassword").value = "";
    document.getElementById("accountReTypePassword").value = "";
  }

  return (
    <div className="updateAccount">
      <Sidebar />
      <div className="updateAccount__layout">
        <TopNav name={'Cập nhập tài khoản'} />
        {
          <div>
            <h1 className="updateAccount__title">Quản lý tài khoản</h1>
            <div className="updateAccount__infor" >
              <h2 className="updateAccount__infor__title">Thông tin tài khoản</h2>
              <div className="updateAccount__list" >
                <div className="updateAccount__items">
                  <div className="updateAccount__item">
                    <p className="updateAccount__item__title">Họ tên<span>*</span></p>
                    <input type="text" placeholder={updateAccounts.fullname} className="updateAccount__input" id="accountFullname" onChange={(e) => setNewFullname(e.target.value)} />
                  </div>
                  <div className="updateAccount__item">
                    <p className="updateAccount__item__title">Tên đăng nhập:<span>*</span></p>
                    <input type="text" placeholder={updateAccounts.username} className="updateAccount__input" id="accountUsername" onChange={(e) => setNewUsername(e.target.value)} />
                  </div>
                </div>
                <div className="updateAccount__items">
                  <div className="updateAccount__item">
                    <p className="updateAccount__item__title">Số điện thoại <span>*</span></p>
                    <input type="text" placeholder={updateAccounts.phone} className="updateAccount__input" id="accountPhone" onChange={(e) => setNewPhone(e.target.value)} />
                  </div>
                  <div className="updateAccount__item">
                    <p className="updateAccount__item__title">Mật khẩu <span>*</span></p>
                    <input type="password" value={updateAccounts.password} className="updateAccount__input" id="accountPassword" onChange={(e) => setNewPassword(e.target.value)} />
                  </div>
                </div>
                <div className="updateAccount__items">
                  <div className="updateAccount__item">
                    <p className="updateAccount__item__title">Email <span>*</span></p>
                    <input type="text" placeholder={updateAccounts.email} className="updateAccount__input" id="accountEmail" onChange={(e) => setNewEmail(e.target.value)} />
                  </div>
                  <div className="updateAccount__item">
                    <p className="updateAccount__item__title">Nhập lại mật khẩu <span>*</span></p>
                    <input type="password" value={updateAccounts.password} className="updateAccount__input" id="accountReTypePassword" onChange={(e) => setNewPassword(e.target.value)} />
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
              <button type="submit" className="updateAccount__button updateAccount__button-update" onClick={() => handleEdit(updateAccounts.id)}>Cập nhập</button>
            </div>
          </div>
        }
      </div>
    </div >
  );
}
export default UpdateAccount
