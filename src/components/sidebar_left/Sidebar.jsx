import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import GridViewIcon from '@mui/icons-material/GridView';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LayersIcon from '@mui/icons-material/Layers';
import ForumIcon from '@mui/icons-material/Forum';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import LoginIcon from '@mui/icons-material/Login';

import Logo from '../../assets/LogoAlta.svg'



function Sidebar({ Logout }) {
    // const [toggled, setToggled] = useState(false);

    // const handleToggled = (event, active) => {
    //     setToggled(active);
    // };
    return (
        <div className="sidebar">
            <div className="sidebarLogo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="sidebarWrapper">
                <div className="sidebarList">
                    <NavLink to="/" activeClassName="is-active" className="sidebarListItem">
                        <div>
                            <GridViewIcon />
                            <p className="sidebarTextItem">Dashboard</p>
                        </div>
                    </NavLink>
                    <NavLink to="/equipments" activeClassName="is-active" className="sidebarListItem">
                        <div>
                            <DesktopMacIcon />
                            <p className="sidebarTextItem">Thiết bị</p>
                        </div>
                    </NavLink>
                    <NavLink to="/services" activeClassName="is-active" className="sidebarListItem">
                        <div>
                            <ForumIcon />
                            <p className="sidebarTextItem">Dịch vụ</p>
                        </div>
                    </NavLink>
                    <NavLink to="/provide-numbers" activeClassName="is-active" className="sidebarListItem">
                        <div >
                            <LayersIcon />
                            <p className="sidebarTextItem">Cấp số</p>
                        </div>
                    </NavLink>
                    <NavLink to="/reports" activeClassName="is-active" className="sidebarListItem">
                        <div>
                            <SummarizeIcon />
                            <p className="sidebarTextItem">Báo cáo</p>
                        </div>
                    </NavLink>
                    <div className="dropdownSidebar">
                        <div className="dropbtn">
                            <GridViewIcon />
                            <p className="sidebarTextItem">Cài đặt</p>
                            <MoreVertIcon style={{ display: 'flex', flex: 'auto' }} />
                        </div>
                        <ul className="dropdown-content">
                            <NavLink to="/roles" activeClassName="is-active" className="item">
                                <li >Quản lý vai trò</li>
                            </NavLink>
                            <NavLink to="/manage-account" activeClassName="is-active" className="item">
                                <li >Quản lý tài khoản</li>
                            </NavLink>
                            <NavLink to="/diary-activities" activeClassName="is-active" className="item">
                                <li>Nhật ký người dùng</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

            </div>
            <button className="logout" onClick={Logout}>
                <LoginIcon />
                <p className="logoutText">Đăng xuất</p>
            </button>
        </div >
    )
}
export default Sidebar