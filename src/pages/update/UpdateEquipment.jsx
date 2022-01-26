import React, { useState } from 'react';
import TopNav from '../../components/topbar/TopNav'
import DropdownUpdate from './Dropdown__Update'

import './updateEquipment.css'

function UpdateEquipment() {
  const [selected, setSelected] = useState('Kiosk');
  return (
    <div className="updateEquipment">
      <TopNav name={'Cập nhập thiết bị'} />
      <div>
        <h1 className="updateEquipment__title">Quản lý thiết bị</h1>
        <div className="updateEquipment__infor">
          <h2 className="updateEquipment__infor__title">Thông tin thiết bị</h2>
          <div className="updateEquipment__list">
            <div className="updateEquipment__items">
              <div className="updateEquipment__item">
                <p>Mã thiết bị <span>*</span></p>
                <input type="text" placeholder="Nhập mã thiết bị" className="updateEquipment__input" value={'KIO_01'} />
              </div>
              <div className="updateEquipment__item">
                <p>Loại thiết bị <span>*</span></p>
                <DropdownUpdate selected={selected} setSelected={setSelected} options={['Kiosk', 'Display counter']} style={{ width: 770 }} />
              </div>
            </div>
            <div className="updateEquipment__items">
              <div className="updateEquipment__item">
                <p>Tên thiết bị <span>*</span></p>
                <input type="text" placeholder="Nhập tên thiết bị" className="updateEquipment__input" value={'Kiosk'} />
              </div>
              <div className="updateEquipment__item">
                <p>Tên đăng nhập <span>*</span></p>
                <input type="text" placeholder="Nhập tài khoản" className="updateEquipment__input" value={'sonkyo146'} />
              </div>
            </div>
            <div className="updateEquipment__items">
              <div className="updateEquipment__item">
                <p>Địa chỉ IP <span>*</span></p>
                <input type="text" placeholder="Nhập địa chỉ IP" className="updateEquipment__input" value={'128.172.308'} />
              </div>
              <div className="updateEquipment__item">
                <p>Mật khẩu <span>*</span></p>
                <input type="text" placeholder="Nhập mật khẩu" className="updateEquipment__input" value={'CMS'} />
              </div>
            </div>
            <div className="updateEquipment__items">
              <div className="updateEquipment__item" style={{ flexGrow: 1 }}>
                <p>Dịch vụ sử dụng <span>*</span></p>
                <input type="text" placeholder="Nhập dịch vụ sử dụng" className="updateEquipment__input" style={{ width: '99%' }} />
              </div>
            </div>
            <p className="updateEquipment__desc"><span>*</span> Là trường thông tin bắt buộc</p>
          </div>
        </div>
        <div className="updateEquipment__buttons">
          <button className="updateEquipment__button updateEquipment__button-cancel">Huỷ bỏ</button>
          <button className="updateEquipment__button updateEquipment__button-addDevice">Cập nhập</button>
        </div>
      </div>
    </div>
  );
}
export default UpdateEquipment
