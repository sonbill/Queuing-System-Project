import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'

import { db } from '../../firebase-config'
import { useParams } from "react-router-dom";
import { onSnapshot, collection, updateDoc, doc, getDoc } from 'firebase/firestore'

import './updateService.css'

export default function UpdateService() {
  const [updateServices, setUpdateServices] = useState([])

  const [updateServiceName, setUpdateServiceName] = useState('')
  const [updateServiceID, setUpdateServiceID] = useState('')
  const [updateServiceDesc, setUpdateServiceDesc] = useState('')

  const params = useParams()
  const serviceID = params.serviceID

  const userData = async () => {
    const docRef = doc(db, "services", serviceID);
    const docSnap = await getDoc(docRef);
    setUpdateServices({ ...docSnap.data(), id: docSnap.id })
  }

  useEffect(() => {
    userData();
  }, []);

  // useEffect(
  //   () => onSnapshot(collection(db, 'services'), (snapshot) =>
  //     setUpdateServices(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  //   ), []
  // );
  const handleEdit = async (id) => {
    const docRef = doc(db, 'services', id)
    const payload = { serviceName: updateServiceName, serviceID: updateServiceID, serviceDesc: updateServiceDesc }
    updateDoc(docRef, payload);

    document.getElementById("serviceID").value = "";
    document.getElementById("serviceName").value = "";
    document.getElementById("description").value = "";
  }
  return (
    <div className="updateService">
      <Sidebar />
      {
        <div className="updateService__layout">
          <TopNav name={'Cập nhập'} />
          <div className="updateService__title">
            <h3>Quản lý dịch vụ</h3>
          </div>
          <div className="updateService__infor">
            <h2 className="updateService__infor__title">
              Thông tin dịch vụ
            </h2>
            <div className="updateService__inputWrapper">
              <div className="updateService__inputDetail__left">
                <div className="updateService__input__item">
                  <label htmlFor="serviceID">Mã dịch vụ<span>*</span></label>
                  <input type="text" name="serviceID" id="serviceID" placeholder={updateServices.serviceID} onChange={(e) => setUpdateServiceID(e.target.value)} />
                </div>
                <div className="updateService__input__item">
                  <label htmlFor="serviceName">Tên dịch vụ <span>*</span></label>
                  <input type="text" name="serviceName" id="serviceName" placeholder={updateServices.serviceName} onChange={(e) => setUpdateServiceName(e.target.value)} />
                </div>
              </div>
              <div className="updateService__inputDetail__right">
                <label htmlFor="description">Mô tả: </label>
                <textarea name="description" id="description" rows="6" placeholder={updateServices.serviceDesc} onChange={(e) => setUpdateServiceDesc(e.target.value)}>

                </textarea>
              </div>
            </div>
            <div className="updateService__rulesNumber">
              <h2 className="updateService__rulesNumber__title">Quy tắc cấp số</h2>
              <div className="updateService__rulesNumber__items">
                <div className="updateService__rulesNumber__labelInput">
                  <input type="checkbox" className="updateService__rulesNumber__checkbox" />
                  <p>Tăng tự động từ: </p>
                </div>
                <div className="updateService__rulesNumber__input">
                  <input type="text" placeholder="0001" />
                  <span>đến</span>
                  <input type="text" placeholder="9999" />
                </div>
              </div>
              <div className="updateService__rulesNumber__items">
                <div className="updateService__rulesNumber__labelInput">
                  <input type="checkbox" className="updateService__rulesNumber__checkbox" />
                  <p>Prefix: </p>
                </div>
                <div className="updateService__rulesNumber__input">
                  <input type="text" placeholder="0001" />
                </div>
              </div>
              <div className="updateService__rulesNumber__items">
                <div className="updateService__rulesNumber__labelInput">
                  <input type="checkbox" className="updateService__rulesNumber__checkbox" />
                  <p>Surfix: </p>
                </div>
                <div className="updateService__rulesNumber__input">
                  <input type="text" placeholder="0001" />
                </div>
              </div>
              <div className="updateService__rulesNumber__labelInput">
                <input type="checkbox" className="updateService__rulesNumber__checkbox" />
                <p>Reset mỗi ngày: </p>
              </div>
            </div>
            <p className="updateService__desc"><span>*</span> Là trường thông tin bắt buộc</p>
          </div>
          <div className="updateService__buttons">
            <Link to="/services">
              <button className="updateService__button updateService__button-cancel">Huỷ bỏ</button>
            </Link>
            <button className="updateService__button updateService__button-updateService" onClick={() => handleEdit(updateServices.id)}>Cập nhập dịch vụ</button>
          </div>
        </div>
      }
    </div>
  )
}
