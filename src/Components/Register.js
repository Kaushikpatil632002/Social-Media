import React from 'react'
import './Register.scss'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <>
    <div className='Register'>
    <div className='card'>
        <div className='left'>
            <h1>Social </h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "</p>
            <span>Do You have an account?</span>
            <NavLink to='/Login'><button>Login</button></NavLink>
        </div>
        <div className='right'>
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='username'/>
                <input type='Email' placeholder='Email'/>
                <input type='Passward' placeholder='Passward'/>
                <input type='Text' placeholder='Name'/>
                <button>Register</button>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}
export default Register