import React, { useState } from 'react';
import TopNav from '../../components/topbar/TopNav'
import { DataGrid } from '@mui/x-data-grid';
import DropdownEquipment from './dropdown_equipment';
import DropdownEquipmentTwo from './dropdown_equipment2'
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';

import './equipment.css';

function Equipment() {
  const [selected, setSelected] = useState("Tất cả");
  const [selected2, setSelected2] = useState("Tất cả");


  const columns = [
    { field: 'id', headerName: 'Mã thiết bị', width: 200 },
    { field: 'equipment', headerName: 'Tên thiết bị', width: 230 },
    { field: 'ipAddress', headerName: 'Địa chỉ IP', width: 130 },
    {
      field: 'activityStatus',
      headerName: 'Trạng thái hoạt động',
      type: 'number',
      width: 200,
    },
    {
      field: 'connectionStatus',
      headerName: 'Trạng thái kết nối',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'services',
      headerName: 'Dịch vụ sử dụng',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 320,
    },
    {
      field: 'details',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'update',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];

  const rows = [
    { id: 1, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: '', details: '', update: '' },
    { id: 2, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: '', details: '', update: '' },
    { id: 3, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: '', details: '', update: '' },
    { id: 4, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: '', details: '', update: '' },
    { id: 5, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: '', details: '', update: '' },
    { id: 6, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: '', details: '', update: '' },
    { id: 7, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: '', details: '', update: '' },

  ];
  return (
    <div className="equipment">
      <TopNav />
      <div className="equipment__wrapper">
        <h1 className="equipment__title">Danh sách các thiết bị</h1>
        <div className="equipment__list">
          <div className="equipment__dropdown__wrapper">
            <div className="equipment__dropdown__item">
              <p>Trạng thái hoạt động</p>
              <DropdownEquipment selected={selected} setSelected={setSelected} optionsOne={['Tất cả', 'Hoạt động', 'Ngưng hoạt động']} />
            </div>
            <div className="equipment__dropdown__item">
              <p>Trạng thái kết nối</p>
              <DropdownEquipmentTwo selected={selected2} setSelected={setSelected2} optionsTwo={['Tất cả', 'Kết nối', 'Mất kết nối']} />
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
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[5]}
          />
        </div>
        <div className="equipment__add_devices">
          <AddBoxIcon style={{ fontSize: 30 }} />
          <p>Thêm thiết bị</p>
        </div>
      </div>
    </div>
  );
}
export default Equipment;
