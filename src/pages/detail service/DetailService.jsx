import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { detailServiceRows } from '../../dummyData'
import Dropdown from '../../components/Dropdown/Dropdown'
import Datepicker from './Datepicker/Datepicker'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { db } from '../../firebase-config'
import { onSnapshot, collection } from 'firebase/firestore'

import './detailService.css'

export default function DetailService() {
  const [selected, setSelected] = useState("Tất cả");
  const [detailServices, setDetailServices] = useState([])
  const [manageServices, setManageServices] = useState([])

  useEffect(
    () => onSnapshot(collection(db, 'services'), (snapshot) =>
      setDetailServices(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ), []
  );
  useEffect(
    () => onSnapshot(collection(db, 'manageService'), (snapshot) =>
      setManageServices(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ), []
  );

  // const detailServiceColumns = [
  //   { field: 'id', headerName: 'Số thứ tự', width: 500 },
  //   { field: 'status', headerName: 'Trạng thái', width: 500 },
  // ]
  return (
    <div className="detailService">
      <Sidebar />
      <div className="detailService__layout">
        <TopNav name={'Chi tiết'} />
        <div className="detailService__title">
          <p>Quản lý dịch vụ</p>
        </div>
        <div className="detailService__content">
          {/* CONTENT LEFT */}
          <div className="detailService__content__left">
            {detailServices.map((detailService) => (
              <div className="detailService__infor">
                <h2 className="detailService__content__title">
                  Thông tin dịch vụ
                </h2>
                <div className="detailService__infor__item">
                  <p className="detailService__item__title" >Mã dịch vụ </p>
                  <p className="detailService__item__value">{detailService.serviceID}</p>
                </div>
                <div className="detailService__infor__item">
                  <p className="detailService__item__title">Tên dịch vụ </p>
                  <p className="detailService__item__value">{detailService.serviceName}</p>
                </div>
                <div className="detailService__infor__item">
                  <p className="detailService__item__title">Mô tả</p>
                  <p className="detailService__item__value">{detailService.serviceDesc}</p>
                </div>
              </div>
            ))}
            {/* Rules Number */}
            <div div className="detailService__rulesNumber" >
              <h2 className="detailService__content__title">Quy tắc cấp số</h2>
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
          {/* CONTENT RIGHT */}
          <div className="detailService__content__right">
            {/* FUNCTION */}
            <div className="detailService__function">
              <div>
                <div className="detailService__func__status">
                  <p className="detailService__func__title">Trạng thái hoạt động</p>
                  <Dropdown selected={selected} setSelected={setSelected} options={['Tất cả', 'Hoạt động', 'Ngưng hoạt động']} setWidth={{ width: 250 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
                </div>
              </div>
              <div className="detailService__func__datepicker">
                <p className="detailService__func__title">Chọn thời gian</p>
                <Datepicker />
              </div>
              <div>
                <p className="detailService__func__title">Từ khoá</p>
                <div className="detailService__searchbar">
                  <input type='text' placeholder='Nhập từ khoá' id="search" />
                  <button htmlFor="search">
                    <SearchIcon
                      style={{ color: '#FF9138' }} />
                  </button>
                </div>
              </div>
            </div>
            {/* TABLE */}
            <div className="detailService__table">
              {/* <DataGrid
                rows={detailServiceRows}
                columns={detailServiceColumns}
                pageSize={10}
                rowsPerPageOptions={[5]}
              /> */}
              <table className="equipment__table__wrapper">
                <thead>
                  <tr className="equipment__table__column">
                    <th>Mã dịch vụ</th>
                    <th>Tên dịch vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {manageServices.map((manageService) => (
                    <tr key={manageService.id} class="equipment__table__row">
                      <td>{manageService.manageServiceID}</td>
                      <td>{manageService.manageStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* DIRECTION BUTTON */}
          <div className="detailService__directionButton">
            <div className="detailService__btn detailService__updateList">
              <Link to={"/services/add-service/"}>
                <BorderColorIcon style={{
                  fontSize: 20
                }} />
                Cập nhập danh sách
              </Link>
            </div>
            <div className="detailService__btn detailService__return">
              <Link to={"/services/add-service/"}>
                <KeyboardReturnIcon style={{
                  fontSize: 20
                }} />
                Quay lại
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
