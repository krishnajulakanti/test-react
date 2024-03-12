import React, { useState } from 'react'

export const UseState_LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const loginForm = (event) => {
    event.preventDefault();
    if (username && password !== (null || undefined || '')) {
      alert(`Username ${username} Password ${password}`)
    }
  }

  const loginFormCredentials = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password !== (null || undefined || '')) {
      alert(`Username ${credentials.username} Password ${credentials.password}`)
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={loginForm}>
          <div>
            <label>Username:</label>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            <h1>{username}</h1>
          </div>
          <div>
            <label>password:</label>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
            <h1>{password}</h1>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <br />

      <div>
        <form onSubmit={loginFormCredentials}>
          <div>
            <label>Username:</label>
            <input type='text' value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <h1>{credentials.username}</h1>
          </div>
          <div>
            <label>password:</label>
            <input type='text' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <h1>{credentials.password}</h1>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UseState_LoginForm