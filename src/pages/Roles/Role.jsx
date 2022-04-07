import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { db } from '../../firebase-config'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'

import './role.css'

export default function Roles() {


  const [roles, setRoles] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'roles'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snapshot) =>
      setRoles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;

  }, []);

  return (
    <div className="roles">
      <Sidebar />
      <div className="roles__layout" >
        <TopNav name={'Quản lý vai trò'} />
        <div className="roles__wrapper">
          <h2 className="roles__title">Danh sách vai trò</h2>
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
