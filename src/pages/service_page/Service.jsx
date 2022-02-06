import React, { useState } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { serviceRows } from '../../dummyData';
import DropdownEquipment from './dropdown_service/Dropdown_Service'
import Datepicker from './Datepicker/Datepicker'

import './service.css'

function Service() {
  const [selected, setSelected] = useState("Tất cả");


  const ServiceColumns = [
    { field: 'id', headerName: 'Mã dịch vụ', width: 130 },
    { field: 'service', headerName: 'Tên dịch vụ', width: 200 },
    { field: 'serviceDescription', headerName: 'Mô tả dịch vụ', width: 200 },
    {
      field: 'activityStatus',
      headerName: 'Trạng thái hoạt động',
      width: 200,
    },
    {
      field: 'details',
      headerName: '',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/equipments/detail/" + params.row.id}>
              <p>Chi tiết</p>
            </Link>
          </>
        );
      }
    },
    {
      field: 'update',
      headerName: '',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/equipments/update/" + params.row.id}>
              <p>Cập nhập</p>
            </Link>
          </div >
        );
      }
    },
  ];
  return (
    <div className="service">
      <Sidebar name={'Danh sách dịch vụ'} />
      <div className="service__layout">
        <TopNav />
        <div className="service__wrapper">
          <div className="service__title">
            <h2>Quản lý dịch vụ</h2>
          </div>
          <div className="service__function">
            <div className="service__func__left">
              <DropdownEquipment selected={selected} setSelected={setSelected} optionsOne={['Tất cả', 'Hoạt động', 'Ngưng hoạt động']} />
              <Datepicker />
            </div>
            <div className="service__func__right">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="service__table">
          <DataGrid
            rows={serviceRows}
            columns={ServiceColumns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </div>
        <div className="service__add__service">
          Thêm dịch vụ
        </div>
      </div>
    </div>
  );
}
export default Service;