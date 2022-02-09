import React from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'

import './addService.css'
function AddService() {
  return (
    <div className="addService">
      <Sidebar />
      <div className="service__layout">
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
                <input type="text" name="serviceID" id="serviceID" placeholder="201" />
              </div>
              <div className="addService__input__item">
                <label htmlFor="serviceName">Tên dịch vụ <span>*</span></label>
                <input type="text" name="serviceName" id="serviceName" placeholder="Khám tim mạch" />
              </div>
            </div>
            <div className="addService__inputDetail__right">
              <label htmlFor="description">Mô tả: </label>
              <textarea name="description" id="description" rows="6" >

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
          <button className="addService__button addService__button-addService">Cập nhập</button>
        </div>
      </div>
    </div >
  );
}
export default AddService
