import { useState } from 'react'
import './Login.css'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Jwt } from './Types'
import onHandleSubmit from '../../services/HandleSubmit'

export default () => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [jwt, setJwt] = useState<Jwt>({} as Jwt)

  const navigate = useNavigate()

  return (
    <div id="main">
      <div id="login-main">
        <header id="login-header">
          <h1>Login</h1>
          {/* <marquee
            direction="down"
            behavior="alternate"
            style={{ height: '150px', border: '1px solid black' }}
          >
            <marquee direction="right" behavior="alternate">
              <FcDvdLogo size={30} />
            </marquee>
          </marquee> */}

          <div id="input-box">
            <div>
              <input
                placeholder="User"
                type="text"
                value={user}
                onChange={event => setUser(event.target.value)}
              />
            </div>
            <div className="password-wrapper">
              <input
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              {showPassword ? (
                <AiFillEye
                  className="show-password"
                  onClick={() => setShowPassword(false)}
                  size={18}
                />
              ) : (
                <AiFillEyeInvisible
                  className="show-password"
                  onClick={() => setShowPassword(true)}
                  size={18}
                />
              )}
            </div>
          </div>

          <button
            id="login-button"
            disabled={!user || !password}
            onClick={() =>
              onHandleSubmit({
                user,
                password,
                setUser,
                setPassword,
                navigate,
                setJwt,
              })
            }
          >
            Enter
          </button>
        </header>
      </div>
    </div>
  )
}
