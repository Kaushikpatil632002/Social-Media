import React, { useContext } from 'react'
import './LeftBar.scss'
import friends from '../assets/1.jpg'
import Messages from '../assets/2.jpg'
import Group from '../assets/6.jpg'
import Market from '../assets/7.jpg'
import Watch from '../assets/8.jpg'
import Memories from '../assets/9.jpg'
import Events from '../assets/10.jpg'
import Gaming from '../assets/11.jpg'
import Gallery from '../assets/12.jpg'
import Videos from '../assets/13.jpg'
import Fundraiser from '../assets/5.jpg'
import Tutorials from '../assets/4.jpg'
import Courses from '../assets/3.jpg'
import { AuthContext } from '../AuthContext'
// 
function LeftBar() {

    const {currentUser}=useContext(AuthContext)
  return (
    <div className='leftbar'>
     <div className='conatiner'>
        <div className='menu'>
            <div className='user'>
                <img src={currentUser.ProfilePicture} alt=''/>
                <span>{currentUser.name}</span>
            </div> 
            
            <div className='item'>
                <img src={friends} alt=''/>
                <span>Friends</span>
            </div>  

            <div className='item'>
                <img src={Group} alt=''/>
                <span>Group</span>
            </div>  

            <div className='item'>
                <img src={Market} alt=''/>
                <span>Market</span>
            </div>  

            <div className='item'>
                 <img src={Watch} alt=''/>
                 <span>Watch</span>
            </div>  

            <div className='item'>
                 <img src={Memories} alt=''/>
                 <span>Memories</span>
            </div>  
            
             <hr/>
            <div className='item'>
                 <span>Your Shortcuts</span>
            </div>

            <div className='item'>
                  <img src={Events} alt=''/>
                  <span>Events</span>
            </div>  
            <div className='item'>
                 <img src={Gaming} alt=''/>
                 <span>Gaming</span>
            </div>  
            <div className='item'>
                 <img src={Gallery} alt=''/>
                  <span>Gallery</span>
            </div>  
            <div className='item'>
                 <img src={Videos} alt=''/>
                 <span>Videos</span>
            </div>  
             <div className='item'>
                 <img src={Messages} alt=''/>
                 <span>Messages</span>
            </div>  
            <hr/>
            <span>Others</span>

            <div className='item'>
                 <img src={Fundraiser} alt=''/>
                 <span>Fundraiser</span>
            </div>  
            <div className='item'>
                 <img src={Tutorials} alt=''/>
                 <span>Tutorials</span>
            </div>  
            <div className='item'>
                 <img src={Courses} alt=''/>
                 <span>Courses</span>
            </div>  

         </div>
      </div>

    </div>
  )
}

export default LeftBar
