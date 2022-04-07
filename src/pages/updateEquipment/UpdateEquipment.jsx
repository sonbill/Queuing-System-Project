import React, { useState, useEffect } from 'react';
import TopNav from '../../components/topbar/TopNav'
import Dropdown from '../../components/Dropdown/Dropdown'
import Sidebar from '../../components/sidebar_left/Sidebar'
import { Link } from 'react-router-dom'
import MultipleSelectedDropdown from './multipleSelectDropdown/MultipleSelectedDropdown'

import { db } from '../../firebase-config'
import { useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from 'firebase/firestore'


import './updateEquipment.css'

function UpdateEquipment() {
  const [selected, setSelected] = useState('Chọn loại thiết bị');

  const [updateIpAddress, setUpdateIpAddress] = useState('')
  const [updateEquipmentName, setUpdateEquipmentName] = useState('')
  const [updateEquipmentID, setUpdateEquipmentID] = useState('')

  const [updateEquipments, setUpdateEquipments] = useState([])

  const params = useParams()
  const equipmentID = params.equipmentID

  const userData = async () => {
    const docRef = doc(db, "equipments", equipmentID);
    const docSnap = await getDoc(docRef);
    setUpdateEquipments({ ...docSnap.data(), id: docSnap.id })
  }

  useEffect(() => {
    userData();
  }, []);

  // useEffect(
  //   () => onSnapshot(collection(db, 'equipments'), (snapshot) =>
  //     setUpdateEquipments(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  //   ), []
  // );
  const handleEdit = async (id) => {

    const docRef = doc(db, 'equipments', id)
    const payload = { ipAddress: updateIpAddress, equipmentName: updateEquipmentName, equipmentID: updateEquipmentID }

    updateDoc(docRef, payload);
  }
  return (
    <div className="updateEquipment">
      <Sidebar />
      <div className="updateEquipment__layout">
        <TopNav name={'Cập nhập thiết bị'} />
        {
          <div>
            <h1 className="updateEquipment__title">Quản lý thiết bị</h1>
            <div className="updateEquipment__infor">
              <h2 className="updateEquipment__infor__title">Thông tin thiết bị</h2>
              <div className="updateEquipment__list">
                <div className="updateEquipment__items">
                  <div className="updateEquipment__item">
                    <p className="updateEquipment__item__title">Mã thiết bị <span>*</span></p>
                    <input type="text" className="updateEquipment__input" placeholder={updateEquipments.equipmentID} onChange={(e) => setUpdateEquipmentID(e.target.value)} />
                  </div>
                  <div className="updateEquipment__item">
                    <p className="updateEquipment__item__title">Loại thiết bị <span>*</span></p>
                    <Dropdown selected={selected} setSelected={setSelected} options={['Kiosk', 'Display counter']} setWidth={{ width: 770 }} setHeight={{ height: 42 }} setPadding={{ padding: 6 }} />
                  </div>
                </div>
                <div className="updateEquipment__items">
                  <div className="updateEquipment__item">
                    <p className="updateEquipment__item__title">Tên thiết bị <span>*</span></p>
                    <input type="text" className="updateEquipment__input" placeholder={updateEquipments.equipmentName} onChange={(e) => setUpdateEquipmentName(e.target.value)} />
                  </div>
                  <div className="updateEquipment__item">
                    <p className="updateEquipment__item__title">Tên đăng nhập <span>*</span></p>
                    <input type="text" className="updateEquipment__input" placeholder={'sonkyo146'} />
                  </div>
                </div>
                <div className="updateEquipment__items">
                  <div className="updateEquipment__item">
                    <p className="updateEquipment__item__title">Địa chỉ IP <span>*</span></p>
                    <input type="text" className="updateEquipment__input" placeholder={updateEquipments.ipAddress} onChange={(e) => setUpdateIpAddress(e.target.value)} />
                  </div>
                  <div className="updateEquipment__item">
                    <p className="updateEquipment__item__title">Mật khẩu <span>*</span></p>
                    <input type="text" className="updateEquipment__input" value={'CMS'} />
                  </div>
                </div>
                <div className="updateEquipment__items">
                  <div className="updateEquipment__item" style={{ flexGrow: 1 }}>
                    <p className="updateEquipment__item__title">Dịch vụ sử dụng <span>*</span></p>
                    {/* <input type="text" placeholder="Nhập dịch vụ sử dụng" className="updateEquipment__input" style={{ width: '99%' }} /> */}
                    <MultipleSelectedDropdown className="updateEquipment__input" value={updateEquipments.services} />
                  </div>
                </div>
                <p className="updateEquipment__desc"><span>*</span> Là trường thông tin bắt buộc</p>
              </div>
              <div className="updateEquipment__buttons">
                <Link to="/equipments">
                  <button className="updateEquipment__button updateEquipment__button-cancel">Huỷ bỏ</button>
                </Link>
                <button className="updateEquipment__button updateEquipment__button-addDevice" onClick={() => handleEdit(updateEquipments.id)}>Cập nhập</button>
              </div>
            </div>
          </div>
        }
      </div >
    </div >
  );
}
export default UpdateEquipment
