import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
export default function Register() {
return (
    <div className='register'>
      <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" placeholder='Enter your email...' className='registerInput' />
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" placeholder='Enter your username...' className='registerInput' />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder='Enter your Password...' className='registerInput' />
            <button className='registerButton'>register</button>
        </form>
            <button className='registerLoginButton'><Link to="/login" className="link">Login</Link></button>
    </div>
  )
}
