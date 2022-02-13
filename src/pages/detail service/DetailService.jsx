import React from 'react'
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'

export default function DetailService() {
  return (
    <div className="detailService">
      <Sidebar />
      <div className="detailService__layout">
        <TopNav name={'Chi tiết'} />
        <div className="detailService__title">
          <p>Quản lý dịch vụ</p>
        </div>
        <div className="detailService__content">
          <div className="detailService__content__left">
            <div className="detailService__infor">
              <p className="detailService__infor_title">
                Thông tin dịch vụ
              </p>
              <div className="detailService__infor__item">
                <p>Mã dịch vụ </p>
                <p>201</p>
              </div>
              <div className="updateService__infor__item">
                <p>Tên dịch vụ </p>
                <p>Khám tim mạch</p>
              </div>
              <div className="updateService__infor__item">
                <p>Mô tả</p>
                <p>Chuyên các bệnh lý về tim</p>
              </div>
            </div>
            <div className="detailService__rulesNumber">
              <h2 className="detailService__rulesNumber__title">Quy tắc cấp số</h2>
              <div className="detailService__rulesNumber__items">
                <div className="detailService__rulesNumber__labelInput">
                  <p>Tăng tự động</p>
                </div>
                <div className="detailService__rulesNumber__input">
                  <input type="text" placeholder="0001" />
                  <span>đến</span>
                  <input type="text" placeholder="9999" />
                </div>
              </div>
              <div className="detailService__rulesNumber__items">
                <div className="detailService__rulesNumber__labelInput">
                  <p>Prefix</p>
                </div>
                <div className="detailService__rulesNumber__input">
                  <input type="text" placeholder="0001" />
                </div>
              </div>
              <div className="updateService__rulesNumber__labelInput">
                <p>Reset mỗi ngày</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
