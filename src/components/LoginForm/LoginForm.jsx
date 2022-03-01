import React, { useState, useEffect } from 'react'
import Logo from '../../assets/LogoAlta.svg'
import LogoPicture from '../../assets/LoginPicture.svg'
import { db } from '../../firebase-config'
import { setDoc, doc, collection } from 'firebase/firestore'
import Equipment__service from '../../firebase/equipments'

import './loginform.css'



const LoginForm = ({ Login, error }) => {
  // const [details, setDetails] = useState({ name: "", password: "" });
  // const submitHandler = e => {
  //   e.preventDefault();
  //   Login(details);

  // }

  //const EquipmentsCollection = collection(db, "equipments")
  console.log('mouted');
  useEffect(() => {
    // console.log('run', i)
    // Equipment__service.add(i, {
    //   id: i, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere corrupti laborum consequatur laudantium vero eligendi commodi cum, neque enim, eum reprehenderit totam. Animi incidunt placeat quos qui do'
    // })
    // console.log('lan', i);
    for (let i = 1; i < 15; i++) {
      // setDoc(doc(db, "equipments", i), {
      //   id: i, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere corrupti laborum consequatur laudantium vero eligendi commodi cum, neque enim, eum reprehenderit totam. Animi incidunt placeat quos qui do'
      // })
      console.log(i)
      // Equipment__service.add({
      //   id: i, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere corrupti laborum consequatur laudantium vero eligendi commodi cum, neque enim, eum reprehenderit totam. Animi incidunt placeat quos qui do'
      // })
      Equipment__service.add2(i, {
        id: i, equipment: 'Kiosk', ipAddress: '192.168.1.10', activityStatus: 'Ngưng hoạt động', connectionStatus: 'Mất kết nối', services: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere corrupti laborum consequatur laudantium vero eligendi commodi cum, neque enim, eum reprehenderit totam. Animi incidunt placeat quos qui do'
      })
    }
  })
  return (
    <div>
      <h2>Hi</h2>
    </div>
    // <div className="login-container">
    //   <form className="login-form" onSubmit={submitHandler}>
    //     <div className="form-inner">
    //       <div className="login-logo">
    //         <img src={Logo} alt="logo" style={{ width: '100%' }} />
    //       </div>
    //       {(error !== "") ? (<div className="errorLogin">{error}</div>) : ""}
    //       <div className="form-group" >
    //         <label htmlFor="name">Tên đăng nhập * </label>
    //         <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} required />
    //       </div>
    //       <div className="form-group" >
    //         <label htmlFor="password">Mật khẩu *  </label>
    //         <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required />
    //       </div>
    //       <div className="forgetPassword">Quên mật khẩu?</div>
    //       <input type="submit" value="Đăng nhập" className="login-btn" />
    //     </div>
    //   </form>
    //   <div className="login-picture">
    //     <img src={LogoPicture} alt="" />
    //     <div className="login-picture-text">
    //       <p>Hệ thống</p>
    //       <h3>QUẢN LÝ XẾP HÀNG</h3>
    //     </div>
    //   </div>
    // </div>
  )
}
export default LoginForm