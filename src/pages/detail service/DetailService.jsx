import React, { useState } from 'react'
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { detailServiceRows } from '../../dummyData'
import DropdownEquipment from './dropdown_service/Dropdown_Service'
import Datepicker from './Datepicker/Datepicker'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import './detailService.css'

export default function DetailService() {
  const [selected, setSelected] = useState("Tất cả");

  const detailServiceColumns = [
    { field: 'id', headerName: 'Số thứ tự', width: 500 },
    { field: 'status', headerName: 'Trạng thái', width: 500 },
  ]
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
            <div className="detailService__infor">
              <h2 className="detailService__content__title">
                Thông tin dịch vụ
              </h2>
              <div className="detailService__infor__item">
                <p className="detailService__item__title">Mã dịch vụ </p>
                <p className="detailService__item__value">201</p>
              </div>
              <div className="detailService__infor__item">
                <p className="detailService__item__title">Tên dịch vụ </p>
                <p className="detailService__item__value">Khám tim mạch</p>
              </div>
              <div className="detailService__infor__item">
                <p className="detailService__item__title">Mô tả</p>
                <p className="detailService__item__value">Chuyên các bệnh lý về tim</p>
              </div>
            </div>
            {/* Rules Number */}
            <div className="detailService__rulesNumber">
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
                  <DropdownEquipment selected={selected} setSelected={setSelected} optionsOne={['Tất cả', 'Hoạt động', 'Ngưng hoạt động']} />
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
              <DataGrid
                rows={detailServiceRows}
                columns={detailServiceColumns}
                pageSize={10}
                rowsPerPageOptions={[5]}
              />
            </div>
          </div>
          {/* DIRECTION BUTTON */}
          <div className="detailService__directionButton">
            <div className="detailService__updateList">
              <Link to={"/services/add-service/"}>
                <BorderColorIcon style={{
                  fontSize: 20
                }} />
                Cập nhập danh sách
              </Link>
            </div>
            <div className="detailService__return">
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
    </div>
  )
}
