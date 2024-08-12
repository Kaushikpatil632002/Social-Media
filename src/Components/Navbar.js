import React  from 'react'
import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../darkModeContext';
import { useContext } from 'react'
import { AuthContext } from '../AuthContext';

 
function Navbar() {

    const{toggle,darkMode}=useContext(DarkModeContext);
    const{currentUser}=useContext(AuthContext);
  return (
    <div className='navbar'>
    <div className='left'>
       <NavLink to='/' style={{textDecoration:"none"}}>
       <span>Social</span>
       
       </NavLink> 
          <HomeOutlinedIcon/>
          {darkMode?<WbSunnyOutlinedIcon onClick={toggle}/>:<DarkModeOutlinedIcon onClick={toggle} />}
          <GridViewOutlinedIcon/>
          <div className='search'>
            <SearchOutlinedIcon/>
            <input type='text' placeholder='Search...'/>
          </div>
    </div>
    <div className='right'>
         <PersonOutlineOutlinedIcon/>
         <EmailOutlinedIcon/>
         <NotificationsOutlinedIcon/>
         <div className='user'>
            
            <img src='https://images.unsplash.com/photo-1523295574103-f1ca2086f4f0?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            <span>{currentUser.name}</span>

         </div>


    </div>
    </div>
  )
}

export default Navbar
