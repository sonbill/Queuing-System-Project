import React, { useState } from 'react'
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import './provideNewNumbers.css'

export default function ProvideNewNumbers() {
  const [service, setService] = useState("Chọn dịch vụ");
  return (
    <div className="ProvideNewNumber">
      <Sidebar />
      <div className="ProvideNewNumber__layout">
        <TopNav name={"Cấp số mới"} />
        <h2 className="ProvideNewNumber__title">Quản lý cấp số</h2>
        <div className="ProvideNewNumber__content">
          <h1 className="ProvideNewNumber__content__title">Cấp số mới</h1>
          <p className="ProvideNewNumber__content__desc">Dịch vụ khách hàng lựa chọn</p>
          <Dropdown selected={service} setSelected={setService} options={['Khám tim mạch', 'Khám sản - Phụ khoa', 'Khám răng hàm mặt', 'Khám tai mũi họng']} setWidth={{ width: 400 }} setHeight={{ height: 52 }} setPadding={{ padding: 10 }} />
          <div className="ProvideNewNumber__buttons">
            <Link to="/provide-numbers">
              <button className="ProvideNewNumber__button ProvideNewNumber__button-cancel">Huỷ bỏ</button>
            </Link>
            <button className="ProvideNewNumber__button ProvideNewNumber__button-print">In số</button>
          </div>
        </div>
      </div>
    </div>
  )
}
