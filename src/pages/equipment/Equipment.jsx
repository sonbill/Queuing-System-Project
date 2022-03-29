import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config'
import { onSnapshot, collection } from 'firebase/firestore'
import TopNav from '../../components/topbar/TopNav'
import Dropdown from '../../components/Dropdown/Dropdown'
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ServicesList from './ServicesList'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar_left/Sidebar'



import './equipment.css';

function Equipment() {
  useEffect(
    () => onSnapshot(collection(db, 'equipments'), (snapshot) =>
      setEquipments(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ), []
  );
  const [equipments, setEquipments] = useState([])
  const [selected, setSelected] = useState("Tất cả");
  const [selected2, setSelected2] = useState("Tất cả");

  return (
    <div className="equipment">
      <Sidebar />
      <div className="equipment-layout">
        <TopNav name={'Danh sách thiết bị'} />
        <div className="equipment__wrapper">
          <h1 className="equipment__title">Danh sách các thiết bị</h1>
          <div className="equipment__list">
            <div className="equipment__dropdown__wrapper">
              <div className="equipment__dropdown__item">
                <p className="equipment__dropdown__title">Trạng thái hoạt động</p>
                <Dropdown selected={selected} setSelected={setSelected} options={['Tất cả', 'Hoạt động', 'Ngưng hoạt động']} setWidth={{ width: 250 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
              </div>
              <div className="equipment__dropdown__item">
                <p className="equipment__dropdown__title">Trạng thái kết nối</p>
                <Dropdown selected={selected2} setSelected={setSelected2} options={['Tất cả', 'Kết nối', 'Mất kết nối']} setWidth={{ width: 250 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
              </div>
            </div>
            <div className="equipment__dropdown__item">
              <p>Từ khoá</p>
              <div className="equipment__searchbar">
                <input type='text' placeholder='Nhập từ khoá' id="search" />
                <button htmlFor="search"><SearchIcon style={{ color: '#FF9138' }} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="equipment__content_wrapper">
          <div className="equipment__table">
            <table className="equipment__table__wrapper">
              <thead>
                <tr className="equipment__table__column">
                  <th>Mã thiết bị</th>
                  <th>Tên thiết bị</th>
                  <th>Địa chỉ IP</th>
                  <th>Trạng thái hoạt động</th>
                  <th>Trạng thái kết nối</th>
                  <th>Dịch vụ</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {equipments.map((equipment) => (
                  <tr key={equipment.id} class="equipment__table__row">
                    <td>{equipment.equipmentID}</td>
                    <td>{equipment.equipmentName}</td>
                    <td>{equipment.ipAddress}</td>
                    <td>{equipment.activityStatus}</td>
                    <td>{equipment.connectionStatus}</td>
                    <td>{equipment.services}</td>
                    <td>
                      <Link to={`/equipments/detail/${equipment.id}`}>
                        Chi tiết
                      </Link>
                    </td>
                    <td>
                      <Link to={`/equipments/update/${equipment.id}`}>
                        Cập nhập
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="equipment__add_devices">
            <AddBoxIcon style={{
              fontSize: 30
            }} />
            <Link to={"/equipments/add-equipment/"}>
              <a href="/equipments/add-equipment/">Thêm thiết bị</a>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Equipment;
