import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import './notification.css'


function Notification() {
  const [show, setShow] = useState(true);
  const clicked = () => {
    setShow(!show)
  }
  const [toggled, setToggled] = useState(false)
  const NotiToggled = () => {
    toggled ? setToggled(false) : setToggled(true);
  }
  return (
    <div className="dropdown">
      <div className="dropdown__icon" onClick={clicked}>
        <NotificationsIcon />
      </div>
      {
        show ? <div className="dropdown__group" >
          <h2 className="dropdown__title" >Thông báo</h2>
          <ul className="dropdown__list">
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Thuỳ Linh</h1>
              <p className='item__content'>Thời gian nhận số: 12h20 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thiên Chinh</h1>
              <p className='item__content'>Thời gian nhận số: 12h22 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Võ Thị Kiêm Liên</h1>
              <p className='item__content'>Thời gian nhận số: 12h25 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Hoàng Nguyễn Quốc Huy</h1>
              <p className='item__content'>Thời gian nhận số: 12h26 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Võ Ngọc Lan Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h26 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
            <li className="dropdown__item">
              <h1 className='item__username'>Người dùng: Nguyễn Thị Trúc Anh</h1>
              <p className='item__content'>Thời gian nhận số: 12h28 ngày 14/01/2022</p>
            </li>
          </ul>
        </div> : null
      }
    </div >
  )
}
export default Notification
