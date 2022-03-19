import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'

import { db } from '../../firebase-config'
import { onSnapshot, collection, setDoc, doc } from 'firebase/firestore'

import './updateRole.css'

export default function UpdateRole() {
  const [updateRoles, setUpdateRoles] = useState([])

  const [updateRoleName, setUpdateRoleName] = useState('')
  const [updateRoleDesc, setUpdateRoleDesc] = useState('')

  useEffect(
    () => onSnapshot(collection(db, 'roles'), (snapshot) =>
      setUpdateRoles(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ), []
  );
  const handleEdit = async (id) => {

    const docRef = doc(db, 'roles', id)
    const payload = { roleName: updateRoleName, roleDesc: updateRoleDesc }

    setDoc(docRef, payload);
  }
  return (
    <div className="updateRole">
      <Sidebar />
      <div className="updateRole__layout">
        <TopNav name={"Cập nhập vai trò"} />
        {updateRoles.map((updateRole) => (
          <div>
            <h2 className="updateRole__title">Danh sách vai trò</h2>
            <div className="updateRole__content">
              <h2 className="updateRole__content__title">Thông tin vai trò</h2>
              <div className="updateRole__content__wrapper">
                <div className="updateRole__content__left">
                  <div className="updateRole__content__left__item">
                    <label htmlFor="roleName">Tên vai trò <span>*</span></label>
                    <input type="text" name="roleName" placeholder={updateRole.roleName} onChange={(e) => setUpdateRoleName(e.target.value)} />
                  </div>
                  <div className="updateRole__content__left__item">
                    <label htmlFor="roleDescription">Mô tả: </label>
                    <textarea name="roleDescription" rows="6" placeholder={updateRole.roleDesc} onChange={(e) => setUpdateRoleDesc(e.target.value)} >
                    </textarea>
                  </div>
                  <p className="updateRole__desc"><span>*</span> Là trường thông tin bắt buộc</p>
                </div>
                <div className="updateRole__content__right">
                  <p className="updateRole__content__right__title">Phân quyền chức năng <span>*</span> </p>
                  <div className="updateRole__content__right__wrapper__items">
                    <div className="updateRole__content__right__items">
                      <h3 className="updateRole__right__item__title">Nhóm chức năng A</h3>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="all" name="all" />
                        <label for="all"> All</label>
                      </div>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="x" name="x" />
                        <label for="x"> Chức năng X</label>
                      </div>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="y" name="y" />
                        <label for="y">Chức năng y</label>
                      </div>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="z" name="z" />
                        <label for="z">Chức năng Z</label>
                      </div>
                    </div>
                    <div className="updateRole__content__right__items">
                      <h3 className="updateRole__right__item__title">Nhóm chức năng B</h3>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="all" name="all" />
                        <label for="all"> All</label>
                      </div>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="x" name="x" />
                        <label for="x"> Chức năng X</label>
                      </div>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="y" name="y" />
                        <label for="y">Chức năng Z</label>
                      </div>
                      <div className="updateRole__content__right__item">
                        <input type="checkbox" id="z" name="z" />
                        <label for="z">Chức năng Z</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="updateRole__buttons">
              <Link to="/roles">
                <button className="updateRole__button updateRole__button-cancel">Huỷ bỏ</button>
              </Link>
              <button className="updateRole__button updateRole__button-update" onClick={() => handleEdit(updateRole.id)}>Cập nhập</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
