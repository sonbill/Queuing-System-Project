import React, { useState } from 'react'
import Logo from '../../assets/LogoAlta.svg'
import LogoPicture from '../../assets/LoginPicture.svg'

import './loginform.css'


function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitHandler}>
        <div className="form-inner">
          <div className="login-logo">
            <img src={Logo} alt="logo" style={{ width: '100%' }} />
          </div>
          {(error !== "") ? (<div className="errorLogin">{error}</div>) : ""}
          <div className="form-group" >
            <label htmlFor="name">Tên đăng nhập * </label>
            <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} required />
          </div>
          <div className="form-group" >
            <label htmlFor="password">Mật khẩu *  </label>
            <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required />
          </div>
          <div className="forgetPassword">Quên mật khẩu?</div>
          <input type="submit" value="Đăng nhập" className="login-btn" />
        </div>
      </form>
      <div className="login-picture">
        <img src={LogoPicture} alt="" />
        <div className="login-picture-text">
          <p>Hệ thống</p>
          <h3>QUẢN LÝ XẾP HÀNG</h3>
        </div>
      </div>
    </div>
  )
}
export default LoginForm