import React, { useState } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { accountRows } from '../../dummyData';
import Dropdown from '../../components/Dropdown/Dropdown'
import AddBoxIcon from '@mui/icons-material/AddBox';

import './manageAccount.css'

export default function ManageAccount() {
  const [role, setRole] = useState("Tất cả");

  const manageAccountColumns = [
    { field: 'username', headerName: 'Tên đăng nhập', width: 230 },
    { field: 'fullname', headerName: 'Họ tên', width: 200 },
    { field: 'phone', headerName: 'Số điện thoại', width: 200 },
    { field: 'emailAddress', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Vai trò', width: 200 },
    { field: 'status', headerName: 'Trạng thái hoạt động', width: 200, },
    {
      field: 'update',
      headerName: '',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/manage-account/update/" + params.row.id}>
              <p>Cập nhập</p>
            </Link>
          </>
        );
      }
    },
  ];
  return (
    <div className="manageAccounts">
      <Sidebar />
      <div className="manageAccounts__layout" >
        <TopNav name={'Quản lý tài khoản'} />
        <div className="manageAccounts__wrapper">
          <h2 className="manageAccounts__title">Danh sách tài khoản</h2>
          <div className="manageAccounts__function">
            <div className="manageAccounts__func__items">
              <p className="manageAccounts__func__title">Tên dịch vụ</p>
              <Dropdown selected={role} setSelected={setRole} options={['Tất cả', 'Hoạt động', 'Ngưng hoạt động',]} setWidth={{ width: 200 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
            </div>
            <div className="manageAccounts__func__items">
              <p className="manageAccounts__func__title">Từ khoá</p>
              <div className="manageAccounts__func__searchbar">
                <input type='text' placeholder='Nhập từ khoá' id="search" />
                <button htmlFor="search">
                  <SearchIcon
                    style={{ color: '#FF9138' }} />
                </button>
              </div>
            </div>
          </div>
          <div className="manageAccounts__content">
            <div className="manageAccounts__table">
              <DataGrid
                rows={accountRows}
                columns={manageAccountColumns}
                pageSize={10}
                rowsPerPageOptions={[8]}
              />
            </div>
            <div className="manageAccounts__newAccount">
              <Link to={"/manage-account/add-account"}>
                <AddBoxIcon style={{
                  fontSize: 30
                }} />
                Thêm tài khoản
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
