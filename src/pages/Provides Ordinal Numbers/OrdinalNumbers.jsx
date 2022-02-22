import React, { useState } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { provideNumbersRows } from '../../dummyData';
import Dropdown from '../../components/Dropdown/Dropdown'
import Datepicker from './Datepicker/Datepicker'
import AddBoxIcon from '@mui/icons-material/AddBox';

import './ordinalNumbers.css'

export default function ProvideNumbers() {
  const [service, setService] = useState("Tất cả");
  const [status, setStatus] = useState("Tất cả");
  const [equipment, setEquipment] = useState("Tất cả");

  const manageProvideColumns = [
    { field: 'id', headerName: 'STT', width: 130 },
    { field: 'customer', headerName: 'Tên khách hàng', width: 200 },
    { field: 'service', headerName: 'Tên dịch vụ', width: 200 },
    { field: 'dateProvide', headerName: 'Thời gian cấp', width: 200 },
    { field: 'expiryDate', headerName: 'Hạn sử dụng', width: 200 },
    { field: 'status', headerName: 'Trạng thái', width: 200, },
    { field: 'equipments', headerName: 'Nguồn cấp', width: 200 },
    {
      field: 'details',
      headerName: '',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/services/detail/" + params.row.id}>
              <p>Chi tiết</p>
            </Link>
          </>
        );
      }
    },
  ];

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
              <DataGrid
                rows={provideNumbersRows}
                columns={manageProvideColumns}
                pageSize={10}
                rowsPerPageOptions={[8]}
              />
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
