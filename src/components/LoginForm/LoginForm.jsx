import React, { useState } from 'react'
import Logo from '../../assets/LogoAlta.svg'
import './loginform.css'


function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <div className="login-pic">
          <img src={Logo} alt="logo" />
        </div>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
        </div>
        <div className="forgetPassword">Quên mật khẩu?</div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  )
}
export default LoginForm