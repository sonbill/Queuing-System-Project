import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from '../../components/Dropdown/Dropdown'
import Datepicker from './Datepicker/Datepicker'
import AddBoxIcon from '@mui/icons-material/AddBox';

import { db } from '../../firebase-config'
import { useParams } from "react-router-dom";
import { onSnapshot, collection, getDoc, setDoc, doc } from 'firebase/firestore'

import './ordinalNumbers.css'

export default function ProvideNumbers() {
  const [service, setService] = useState("Tất cả");
  const [status, setStatus] = useState("Tất cả");
  const [equipment, setEquipment] = useState("Tất cả");

  const [ordinalNumbers, setOrdinalNumbers] = useState([]);


  useEffect(
    () => onSnapshot(collection(db, 'ordinalNumbers'), (snapshot) =>
      setOrdinalNumbers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ), []
  );

  return (
    <div className="provideNumbers">
      <Sidebar />
      <div className="provideNumbers__layout" >
        <TopNav name={'Danh sách cấp số'} />
        <div className="provideNumbers__wrapper">
          <h2 className="provideNumbers__title">Quản lý cấp số</h2>
          <div className="provideNumbers__function">
            <div className="provideNumbers__func__items">
              <p className="provideNumbers__func__title">Tên dịch vụ</p>
              <Dropdown selected={service} setSelected={setService} options={['Tất cả', 'Khám sản - Phụ khoa', 'Khám răng hàm mặt', 'Khám tai mũi họng']} setWidth={{ width: 200 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
            </div>
            <div className="provideNumbers__func__items">
              <p className="provideNumbers__func__title">Tình trạng</p>
              <Dropdown selected={status} setSelected={setStatus} options={['Tất cả', 'Đang chờ', 'Đã sử dụng', 'Bỏ qua']} setWidth={{ width: 200 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
            </div>
            <div className="provideNumbers__func__items">
              <p className="provideNumbers__func__title">Nguồn cấp</p>
              <Dropdown selected={equipment} setSelected={setEquipment} options={['Tất cả', 'Kiosk', 'Hệ thống']} setWidth={{ width: 200 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
            </div>
            <div className="provideNumbers__func__items">
              <p className="provideNumbers__func__title">Chọn thời gian</p>
              <Datepicker />
            </div>
            <div className="provideNumbers__func__items">
              <p className="provideNumbers__func__title">Từ khoá</p>
              <div className="provideNumbers__func__searchbar">
                <input type='text' placeholder='Nhập từ khoá' id="search" />
                <button htmlFor="search">
                  <SearchIcon
                    style={{ color: '#FF9138' }} />
                </button>
              </div>
            </div>
          </div>
          <div className="provideNumbers__content">
            <div className="provideNumbers__table">
              <table className="equipment__table__wrapper">
                <thead>
                  <tr className="equipment__table__column">
                    <th>STT</th>
                    <th>Tên khách hàng</th>
                    <th>Tên dịch vụ</th>
                    <th>Thời gian cấp</th>
                    <th>Hạn sử dụng</th>
                    <th>Trạng thái</th>
                    <th>Nguồn cấp</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {ordinalNumbers.map((ordinalNumber) => (
                    <tr key={ordinalNumber.id} class="equipment__table__row">
                      <td>{ordinalNumber.odID}</td>
                      <td>{ordinalNumber.odUsername}</td>
                      <td>{ordinalNumber.odService}</td>
                      <td>{ordinalNumber.odCreatedAt}</td>
                      <td>{ordinalNumber.odExpired}</td>
                      <td>{ordinalNumber.odStatus}</td>
                      <td>{ordinalNumber.odEquipment}</td>
                      <td>
                        <Link to={`/equipments/detail/${ordinalNumber.id}`}>
                          Chi tiết
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="provideNumbers__newNumber">
              <Link to={"/provide-numbers/new-number"}>
                <AddBoxIcon style={{
                  fontSize: 30
                }} />
                Cấp số mới
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
