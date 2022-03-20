import React, { useState } from 'react'
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'

import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import './addRole.css'

export default function AddRole() {
  const [addRoleDesc, setAddRoleDesc] = useState('')
  const [addRoleName, setAddRoleName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "roles");
    const payload = {
      roleDesc: addRoleDesc,
      roleName: addRoleName,
    }
    await addDoc(collectionRef, payload);
    document.getElementById("roleName").value = "";
    document.getElementById("roleDescription").value = "";
  }

  return (
    <div className="addRole">
      <Sidebar />
      <form className="addRole__layout" onSubmit={handleSubmit}>
        <TopNav name={"Cập nhập vai trò"} />
        <h2 className="addRole__title">Danh sách vai trò</h2>
        <div className="addRole__content">
          <h2 className="addRole__content__title">Thông tin vai trò</h2>
          <div className="addRole__content__wrapper">
            <div className="addRole__content__left">
              <div className="addRole__content__left__item">
                <label htmlFor="roleName">Tên vai trò <span>*</span></label>
                <input type="text" name="roleName" id="roleName" placeholder="Nhập tên vai trò" onChange={(e) => setAddRoleName(e.target.value)} required />
              </div>
              <div className="addRole__content__left__item">
                <label htmlFor="roleDescription">Mô tả: </label>
                <textarea name="roleDescription" id="roleDescription" rows="6" placeholder="Nhập mô tả" onChange={(e) => setAddRoleDesc(e.target.value)} required >
                </textarea>
              </div>
              <p className="addRole__desc"><span>*</span> Là trường thông tin bắt buộc</p>
            </div>
            <div className="addRole__content__right">
              <p className="addRole__content__right__title">Phân quyền chức năng <span>*</span></p>
              <div className="addRole__content__right__wrapper__items">
                <div className="addRole__content__right__items">
                  <h3 className="addRole__right__item__title">Nhóm chức năng A</h3>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="all" />
                    <label for="all"> All</label>
                  </div>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="x" />
                    <label for="x"> Chức năng X</label>
                  </div>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="y" />
                    <label for="y">Chức năng y</label>
                  </div>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="z" />
                    <label for="z">Chức năng Z</label>
                  </div>
                </div>
                <div className="addRole__content__right__items">
                  <h3 className="addRole__right__item__title">Nhóm chức năng B</h3>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="all" />
                    <label for="all"> All</label>
                  </div>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="x" />
                    <label for="x"> Chức năng X</label>
                  </div>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="y" />
                    <label for="y">Chức năng Z</label>
                  </div>
                  <div className="addRole__content__right__item">
                    <input type="checkbox" name="z" />
                    <label for="z">Chức năng Z</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addRole__buttons">
          <Link to="/roles">
            <button className="addRole__button addRole__button-cancel">Huỷ bỏ</button>
          </Link>
          <button className="addRole__button addRole__button-addRole">Thêm</button>
        </div>
      </form>
    </div>
  )
}
