import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from '../../components/Dropdown/Dropdown'
import Datepicker from './Datepicker/Datepicker'
import AddBoxIcon from '@mui/icons-material/AddBox';

import { db } from '../../firebase-config'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'

import './service.css'

function Service() {
  const [selected, setSelected] = useState("Tất cả");
  const [services, setServices] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'services'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snapshot) =>
      setServices(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;

  }, []);
  // const ServiceColumns = [
  //   { field: 'id', headerName: 'Mã dịch vụ', width: 130 },
  //   { field: 'service', headerName: 'Tên dịch vụ', width: 200 },
  //   { field: 'serviceDescription', headerName: 'Mô tả dịch vụ', width: 200 },
  //   {
  //     field: 'activityStatus',
  //     headerName: 'Trạng thái hoạt động',
  //     width: 200,
  //   },
  //   {
  //     field: 'details',
  //     headerName: '',
  //     sortable: false,
  //     width: 160,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/services/detail/" + params.row.id}>
  //             <p>Chi tiết</p>
  //           </Link>
  //         </>
  //       );
  //     }
  //   },
  //   {
  //     field: 'update',
  //     headerName: '',
  //     sortable: false,
  //     width: 160,
  //     renderCell: (params) => {
  //       return (
  //         <div>
  //           <Link to={"/services/update/" + params.row.id}>
  //             <p>Cập nhập</p>
  //           </Link>
  //         </div >
  //       );
  //     }
  //   },
  // ];
  return (
    <div className="service">
      <Sidebar />
      <div className="service__layout">
        <TopNav name={'Danh sách dịch vụ'} />
        <div className="service__wrapper">
          <div className="service__title">
            <h2>Quản lý dịch vụ</h2>
          </div>
          <div className="service__function">
            <div className="service__func__left">
              <div className="service__func__status">
                <p className="service__func__title">Trạng thái hoạt động</p>
                <Dropdown selected={selected} setSelected={setSelected} options={['Tất cả', 'Hoạt động', 'Ngưng hoạt động']} setWidth={{ width: 250 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
              </div>
              <div className="service__func__datepicker">
                <p className="service__func__title">Chọn thời gian</p>
                <Datepicker />
              </div>
            </div>
            <div className="service__func__right">
              <p className="service__func__title">Từ khoá</p>
              <div className="service__searchbar">
                <input type='text' placeholder='Nhập từ khoá' id="search" />
                <button htmlFor="search">
                  <SearchIcon
                    style={{ color: '#FF9138' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="service__content">
          <div className="service__table">
            <table className="equipment__table__wrapper">
              <thead>
                <tr className="equipment__table__column">
                  <th>Mã dịch vụ</th>
                  <th>Tên dịch vụ</th>
                  <th>Mô tả</th>
                  <th>Trạng thái hoạt động</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} class="equipment__table__row">
                    <td>{service.serviceID}</td>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceDesc}</td>
                    <td>{service.serviceActivityStatus}</td>
                    <td>
                      <Link to={`/services/detail/${service.id}`}>
                        Chi tiết
                      </Link>
                    </td>
                    <td>
                      <Link to={`/services/update/${service.id}`}>
                        Cập nhập
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="service__add__service">
            <Link to={"/services/add-service/"}>
              <AddBoxIcon style={{
                fontSize: 30
              }} />
              Thêm dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Service;