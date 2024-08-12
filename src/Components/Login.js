import React, { useContext } from 'react'
import './Login.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthContext';

function Login() {


    const{login}=useContext(AuthContext);

    const handlelogin=()=>{
        login();
    }
  return (
    <>
    <div className='Login'>
    <div className='card'>
        <div className='left'>
            <h1>Hello <br></br>World.</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "</p>
            <span>Don't You have an account?</span>
            <NavLink to='/Register'> <button>Register</button></NavLink>
        </div>
        <div className='right'>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='username'/>
                <input type='passward' placeholder='passward'/>
              <button onClick={handlelogin}>login</button>  
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login
