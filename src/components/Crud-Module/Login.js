import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import ReactLogo from './ReactLogo.png'

const Login = () => {

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const userLogin = (event) => {
    event.preventDefault();
    if (loginData.username && loginData.password !== (null || undefined || '')) {
      console.log(loginData, '1');
      navigate('EmployeeList')
      setLoginData({username: '', password: ''})
    }
  }
  return (
    <div>
      <div>
        <img src={ReactLogo} />
        <label className='heading'>USER LOGIN</label>
      </div>
      <form onSubmit={userLogin}>
        <input type='text' value={loginData.username} placeholder='Username' required
          onChange={(e) => { setLoginData({ ...loginData, username: e.target.value }) }} /><br /><br />
        <input type='password' value={loginData.password} placeholder='Password' required
          onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} /><br />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login