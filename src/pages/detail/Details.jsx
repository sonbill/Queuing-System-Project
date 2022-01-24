import React from 'react';
import TopNav from '../../components/topbar/TopNav'

import './details.css'

function Details() {
  return (
    <div className="details">
      <TopNav />
      <div className="equipment__infor">
        <h1 className="equipment__infor__title">Quản lý thiết bị</h1>
        <div className="equipment__infor__detail">
          <h2>Thông tin thiết bị</h2>
          <div className="equipment__infor__wrapper">
            <div className="equipment__infor__left">
              <div className="equipment__info__leftItem">
                <h5>Mã thiết thiết bị: </h5>
                <p>KIO_01</p>
              </div>
              <div className="equipment__info__leftItem">
                <h5>Mã thiết thiết bị: </h5>
                <p>KIO_01</p>
              </div>
              <div className="equipment__info__leftItem">
                <h5>Mã thiết thiết bị: </h5>
                <p>KIO_01</p>
              </div>
            </div>
            <div className="equipment__infor__right">
              <div className="equipment__info__rightItem">
                <h5>Loại thiết thiết bị: </h5>
                <p>KIO_01</p>
              </div>
              <div className="equipment__info__rightItem">
                <h5>Tên đăng nhập: </h5>
                <p>KIO_01</p>
              </div>
              <div className="equipment__info__rightItem">
                <h5>Mật khẩu: </h5>
                <p>KIO_01</p>
              </div>
            </div>
          </div>
          <div className="equipment__info_services">
            <h5>Dịch vụ sử dụng: </h5>
            <p>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details
