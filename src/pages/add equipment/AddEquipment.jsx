import React, { useState } from 'react';
import TopNav from '../../components/topbar/TopNav'
import Dropdown from '../../components/Dropdown/Dropdown'
import Sidebar from '../../components/sidebar_left/Sidebar';
import { Link } from 'react-router-dom';
import MultipleSelectedDropdown from './MultipleSelectDropdown/MultipleSelectedDropdown'

import { db } from '../../firebase-config'
import { onSnapshot, collection, getDocs, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore'


import './addEquipment.css'

function AddEquipment() {
  const [selected, setSelected] = useState("Chọn loại thiết bị");
  const [newID, setNewID] = useState("")
  const [equipmentName, setEquipmentName] = useState("")
  const [equipment, setEquipment] = useState([])
  const [ipAddress, setIpAddress] = useState("")
  const [service, setService] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "equipments");
    const payload = {
      equipmentID: newID,
      activityStatus: "",
      connectionStatus: "",
      equipmentName: equipmentName,
      ipAddress: ipAddress,
      service: service
    }
    await addDoc(collectionRef, payload);
  }
  return (
    <div className="addEquipment">
      <Sidebar />
      <form className="addEquipment__layout" onSubmit={handleSubmit}>
        <TopNav name={'Thêm thiết bị'} />
        <h1 className="addEquipment__title">Quản lý thiết bị</h1>
        <div className="addEquipment__infor">
          <h2 className="addEquipment__infor__title">Thông tin thiết bị</h2>
          <div className="addEquipment__list">
            <div className="addEquipment__items">
              <div className="addEquipment__item">
                <p className="addEquipment__item__title">Mã thiết bị <span>*</span></p>
                <input type="text" placeholder="Nhập mã thiết bị" className="addEquipment__input" onChange={(e) => setNewID(e.target.value)} />
              </div>
              <div className="addEquipment__item">
                <p className="addEquipment__item__title">Loại thiết bị <span>*</span></p>
                <Dropdown selected={selected} setSelected={setSelected} options={['Kiosk', 'Display counter']} setWidth={{ width: 775 }} setHeight={{ height: 44 }} setPadding={{ padding: 6 }} onChange={(e) => setEquipment(e.target.selected)} />
              </div>
            </div>
            <div className="addEquipment__items">
              <div className="addEquipment__item">
                <p className="addEquipment__item__title">Tên thiết bị <span>*</span></p>
                <input type="text" placeholder="Nhập tên thiết bị" className="addEquipment__input" onChange={(e) => setEquipmentName(e.target.value)} />
              </div>
              <div className="addEquipment__item">
                <p className="addEquipment__item__title">Tên đăng nhập <span>*</span></p>
                <input type="text" placeholder="Nhập tài khoản" className="addEquipment__input" />
              </div>
            </div>
            <div className="addEquipment__items">
              <div className="addEquipment__item">
                <p className="addEquipment__item__title">Địa chỉ IP <span>*</span></p>
                <input type="text" placeholder="Nhập địa chỉ IP" className="addEquipment__input" onChange={(e) => setIpAddress(e.target.value)} />
              </div>
              <div className="addEquipment__item">
                <p className="addEquipment__item__title">Mật khẩu <span>*</span></p>
                <input type="password" placeholder="Nhập mật khẩu" className="addEquipment__input" />
              </div>
            </div>
            <div className="addEquipment__items">
              <div className="addEquipment__item" style={{ flexGrow: 1 }}>
                <p>Dịch vụ sử dụng <span>*</span></p>
                {/* <input type="text" placeholder="Nhập dịch vụ sử dụng" className="addEquipment__input" style={{ width: '99%' }} /> */}
                <MultipleSelectedDropdown />
                {/* // onChange={(e) => setService(e.target.value)} /> */}
              </div>
            </div>
            <p className="addEquipment__desc"><span>*</span> Là trường thông tin bắt buộc</p>
          </div>
        </div>
        <div className="addEquipment__buttons">
          <Link to="/equipments">
            <button className="addEquipment__button addEquipment__button-cancel">Huỷ bỏ</button>
          </Link>
          <button className="addEquipment__button addEquipment__button-addEquipment" type="submit">Thêm thiết bị</button>
        </div>
      </form>
    </div>
  );
}
export default AddEquipment
