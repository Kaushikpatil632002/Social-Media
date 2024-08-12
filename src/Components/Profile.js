
import React from 'react'
import './Profile.scss'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';

import Posts from '../posts/Posts';


function Profile() {
  return (
    <div className='profile'>
      <div className='images'>
       
       <img src='https://images.unsplash.com/photo-1507039102241-5ec61d624406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww' alt='' className='cover'/>
       <img src='https://images.unsplash.com/photo-1494708001911-679f5d15a946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='profilePic'/>
       
     </div>
     <div className='profileContainer'>
       <div className='userInfo'>
         <div className='left'>
           <a href='http://facebook.com'>
           <FacebookTwoToneIcon fontSize='large'/>
           </a>

           <a href='http://facebook.com'>
           <InstagramIcon fontSize='large'/>
           </a>

           <a href='http://facebook.com'>
           <TwitterIcon fontSize='large'/>
           </a>

           <a href='http://facebook.com'>
           <LinkedInIcon fontSize='large'/>
           </a>

           <a href='http://facebook.com'>
           <PinterestIcon fontSize='large'/>
           </a>
         </div>
         <div className='center'>
           <span>Kaushik</span>
           <div className='info'>
             <div className='item'>
               <PlaceIcon/>
               <span>USA</span>
             </div>
             <div className='item'>
               <LanguageIcon/>
               <span>Lana.dev</span>
             </div>     
           </div>
           <button>Follow</button>
         </div>
         <div className='right'>
           <EmailOutlined/>
           <MoreVertOutlined/>
         </div>
       </div>
       <Posts/>
     </div>
    </div>
  )
}

export default Profile
