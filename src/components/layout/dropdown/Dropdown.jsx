import React, { useState } from 'react'
import MenuItem from '../menu item/MenuItem'
import './dropdown.css'

const Dropdown = ({ icon, path }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleHide = () => {
        setShow(false)
    }
    return (
        <div onMouseEnter={handleShow} onMouseLeave={handleHide}>
            <MenuItem label='Cài đặt hệ thống' icon={icon} />
            <div style={{ display: show ? "block" : "none" }}>
                <div className="dropdown__item"><MenuItem label="Quản lý vai trò" path="/vaitro" /></div>
                <div className="dropdown__item"><MenuItem label="Quản lý tài khoản" path="/taikhoan" /></div>
                <div className="dropdown__item"><MenuItem label="Nhật ký người dùng" path="/nhatky" /></div>
            </div>
        </div >
    )
}
export default Dropdown
