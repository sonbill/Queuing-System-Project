import React from 'react'
import './topnav.css'
import Notification from '../NotificationsDropdown/Notification'

function TopNav() {
    return (
        <div className="topnav">
            <div className="topNavTitle">
                <h2>Dashboard</h2>
            </div>
            <div className="topNavRight">
                <div className="topNavRight-Item">
                    <Notification />
                </div>

            </div>

        </div>
    )
}
export default TopNav
