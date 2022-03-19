import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { roleRows } from '../../dummyData';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { db } from '../../firebase-config'
import { onSnapshot, collection } from 'firebase/firestore'

import './role.css'

export default function Roles() {
  // const roleColumns = [
  //   { field: 'role', headerName: 'Tên vài trò', width: 330 },
  //   { field: 'amount', headerName: 'Số người dùng', width: 300 },
  //   { field: 'desc', headerName: 'Mô tả', width: 500 },
  //   {
  //     field: 'update',
  //     headerName: '',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 260,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/roles/update-role/" + params.row.id}>
  //             <a href="/roles/update-role/">Cập nhập</a>
  //           </Link>
  //         </>
  //       );
  //     }
  //   }
  // ];

  const [roles, setRoles] = useState([])

  useEffect(
    () => onSnapshot(collection(db, 'roles'), (snapshot) =>
      setRoles(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ), []
  );

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
              {/* <DataGrid
                rows={roleRows}
                columns={roleColumns}
                pageSize={10}
                rowsPerPageOptions={[8]}
              /> */}
              <table className="equipment__table__wrapper">
                <thead>
                  <tr className="equipment__table__column">
                    <th>Tên vai trò</th>
                    <th>Số người dùng</th>
                    <th>Mô tả</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) => (
                    <tr key={role.id} class="equipment__table__row">
                      <td>{role.roleName}</td>
                      <td>{role.numberOfUsers}</td>
                      <td>{role.roleDesc}</td>
                      <td>
                        <Link to={`/roles/update-role/${role.id}`}>
                          Cập nhập
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="roles__add-role">
              <Link to={"/roles/add-role/"}>
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
