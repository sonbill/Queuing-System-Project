import React from 'react'
import { Link } from 'react-router-dom'
import './topnav.css'
import Notification from '../NotificationsDropdown/Notification'
import userAvatar from '../../assets/userAvatar.svg'

function TopNav({ name }) {
    return (
        <div className="topnav">
            <div className="topNavTitle">
                <h2>{name}</h2>
            </div>
            <div className="topNavRight">
                <div className="topNavRight-Item">
                    <Notification />
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <div className="userAvatar">
                            <div>
                                <img src={userAvatar} alt="" />
                            </div>
                            <div className="userName">
                                <p className="greeting">Xin chào</p>
                                <h3 className="name">Lê Quỳnh Ái Vân</h3>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}
export default TopNav
