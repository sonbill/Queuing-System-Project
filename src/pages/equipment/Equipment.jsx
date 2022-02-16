import React, { useState } from 'react';
import TopNav from '../../components/topbar/TopNav'
import { DataGrid } from '@mui/x-data-grid';
import Dropdown from '../../components/Dropdown/Dropdown'
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ServicesList from './ServicesList'
import { equipmentRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar_left/Sidebar'



import './equipment.css';

function Equipment() {
  const [selected, setSelected] = useState("Tất cả");
  const [selected2, setSelected2] = useState("Tất cả");


  const columns = [
    { field: 'id', headerName: 'Mã thiết bị', width: 130 },
    { field: 'equipment', headerName: 'Tên thiết bị', width: 200 },
    { field: 'ipAddress', headerName: 'Địa chỉ IP', width: 130 },
    {
      field: 'activityStatus',
      headerName: 'Trạng thái hoạt động',
      width: 200,
    },
    {
      field: 'connectionStatus',
      headerName: 'Trạng thái kết nối',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 200,
    },
    {
      field: 'services',
      headerName: 'Dịch vụ sử dụng',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 320,
      renderCell: (params) => {
        return (
          <div>
            {params.row.services}
          </div >
        );
      }
    },
    {
      field: 'details',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/equipments/detail/" + params.row.id}>
              <a href="/equipments/detail">Chi tiết</a>
            </Link>
          </>
        );
      }
    },
    {
      field: 'update',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/equipments/update/" + params.row.id}>
              <a href="/equipments/update">Cập nhập</a>
            </Link>
          </div >
        );
      }
    },
  ];

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
            <DataGrid
              rows={equipmentRows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
            />
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
    </div>
  );
}
export default Equipment;
