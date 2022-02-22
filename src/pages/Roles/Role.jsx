import React from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { roleRows } from '../../dummyData';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';


import './role.css'

export default function Roles() {
  const roleColumns = [
    { field: 'role', headerName: 'Tên vài trò', width: 330 },
    { field: 'amount', headerName: 'Số người dùng', width: 300 },
    { field: 'desc', headerName: 'Mô tả', width: 500 },
    {
      field: 'update',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 260,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/equipments/detail/" + params.row.id}>
              <a href="/equipments/detail">Cập nhập</a>
            </Link>
          </>
        );
      }
    }
  ];

  return (
    <div className="roles">
      <Sidebar />
      <div className="roles__layout" >
        <TopNav name={'Lập báo cáo'} />
        <div className="roles__wrapper">
          <h2 className="roles__title">Quản lý cấp số</h2>
          <div className="roles__function">
            <div className="roles__func__items">
              <p>Từ khoá</p>
              <div className="roles__searchbar">
                <input type='text' placeholder='Nhập từ khoá' id="search" />
                <button htmlFor="search"><SearchIcon style={{ color: '#FF9138' }} /></button>
              </div>
            </div>
          </div>
          <div className="roles__content">
            <div className="roles__table">
              <DataGrid
                rows={roleRows}
                columns={roleColumns}
                pageSize={10}
                rowsPerPageOptions={[8]}
              />
            </div>
            <div className="roles__add-role">
              <Link to={""}>
                <AddBoxIcon style={{
                  fontSize: 30
                }} />
                <p>Thêm vai trò</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
