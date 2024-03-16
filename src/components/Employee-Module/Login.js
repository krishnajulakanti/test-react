import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactLogo from './ReactLogo.png'
import { CurrentUserContext } from './EmployeeContext'

const Login = () => {

  const navigate = useNavigate()

  const { setCurrentUser } = useContext(CurrentUserContext);

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const userLogin = (event) => {
    event.preventDefault();
    if (loginData.username && loginData.password !== (null || undefined || '')) {
      setLoginData({ username: '', password: '' })

      setCurrentUser(loginData);
      
      navigate('/EmployeeList')
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