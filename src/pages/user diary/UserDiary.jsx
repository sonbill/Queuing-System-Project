import React from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { DataGrid } from '@mui/x-data-grid';
import Datepicker from './Datepicker/Datepicker'
import { diaryRows } from '../../dummyData'
import SearchIcon from '@mui/icons-material/Search';

import './userDiary.css'

export default function UserDiary() {
  const diaryColumns = [
    { field: 'id', headerName: 'Số thứ tự', width: 230 },
    { field: 'dateTimeChanged', headerName: 'Thời gian tác động', width: 400 },
    { field: 'ipAddress', headerName: 'IP Thực hiện', width: 300 },
    { field: 'action', headerName: 'Thao tác thực hiện', width: 400, },
  ];

  return (
    <div className="userDiary">
      <Sidebar />
      <div className="userDiary__layout" >
        <TopNav name={'Nhật ký hoạt động'} />
        <div className="userDiary__wrapper">
          <h2 className="userDiary__title">Quản lý cấp số</h2>
          <div className="userDiary__function">
            <div className="userDiary__func__items">
              <p className="userDiary__func__title">Chọn thời gian</p>
              <Datepicker />
            </div>
            <div className="userDiary__func__items">
              <p className="userDiary__func__title">Từ khoá</p>
              <div className="userDiary__func__searchbar">
                <input type='text' placeholder='Nhập từ khoá' id="search" />
                <button htmlFor="search">
                  <SearchIcon
                    style={{ color: '#FF9138' }} />
                </button>
              </div>
            </div>
          </div>
          <div className="userDiary__content">
            <div className="userDiary__table">
              <DataGrid
                rows={diaryRows}
                columns={diaryColumns}
                pageSize={10}
                rowsPerPageOptions={[8]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
