import React, { useState } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'

import { db } from '../../firebase-config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import './addService.css'
function AddService() {

  const [serviceActivityStatus, setServiceActivityStatus] = useState("")
  const [serviceDesc, setServiceDesc] = useState("")
  const [serviceID, setServiceID] = useState("")
  const [serviceName, setServiceName] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "services");
    const payload = {
      serviceID: serviceID,
      serviceName: serviceName,
      serviceDesc: serviceDesc,
      serviceActivityStatus: serviceActivityStatus,
      timestamp: serverTimestamp(),

    }
    await addDoc(collectionRef, payload);
  }
  return (
    <div className="addService">
      <Sidebar />
      <form className="service__layout" onSubmit={handleSubmit}>
        <TopNav name={'Thêm dịch vụ'} />
        <div className="addService__title">
          <h3>Quản lý dịch vụ</h3>
        </div>
        <div className="addService__infor">
          <h2 className="addService__infor__title">
            Thông tin dịch vụ
          </h2>
          <div className="addService__inputWrapper">
            <div className="addService__inputDetail__left">
              <div className="addService__input__item">
                <label htmlFor="serviceID">Mã dịch vụ <span>*</span></label>
                <input type="text" name="serviceID" placeholder="Nhập mã dịch vụ" onChange={(e) => setServiceID(e.target.value)} required />
              </div>
              <div className="addService__input__item">
                <label htmlFor="serviceName">Tên dịch vụ <span>*</span></label>
                <input type="text" name="serviceName" placeholder="Nhập tên dịch vụ" onChange={(e) => setServiceName(e.target.value)} required />
              </div>
            </div>
            <div className="addService__inputDetail__right">
              <label htmlFor="description">Mô tả: </label>
              <textarea name="description" rows="6" onChange={(e) => setServiceDesc(e.target.value)} required>
              </textarea>
            </div>
          </div>
          <div className="rulesNumber">
            <h2 className="rulesNumber__title">Quy tắc cấp số</h2>
            <div className="rulesNumber__items">
              <div className="rulesNumber__labelInput">
                <input type="checkbox" className="rulesNumber__checkbox" />
                <p>Tăng tự động từ: </p>
              </div>
              <div className="rulesNumber__input">
                <input type="text" placeholder="0001" />
                <span>đến</span>
                <input type="text" placeholder="9999" />
              </div>
            </div>
            <div className="rulesNumber__items">
              <div className="rulesNumber__labelInput">
                <input type="checkbox" className="rulesNumber__checkbox" />
                <p>Prefix: </p>
              </div>
              <div className="rulesNumber__input">
                <input type="text" placeholder="0001" />
              </div>
            </div>
            <div className="rulesNumber__items">
              <div className="rulesNumber__labelInput">
                <input type="checkbox" className="rulesNumber__checkbox" />
                <p>Surfix: </p>
              </div>
              <div className="rulesNumber__input">
                <input type="text" placeholder="0001" />
              </div>
            </div>
            <div className="rulesNumber__labelInput">
              <input type="checkbox" className="rulesNumber__checkbox" />
              <p>Reset mỗi ngày: </p>
            </div>
          </div>
          <p className="addService__desc"><span>*</span> Là trường thông tin bắt buộc</p>
        </div>
        <div className="addService__buttons">
          <Link to="/services">
            <button className="addService__button addService__button-cancel">Huỷ bỏ</button>
          </Link>
          <button className="addService__button addService__button-addService" type="submit"> Thêm mới</button>
        </div>
      </form>
    </div >
  );
}
export default AddService
