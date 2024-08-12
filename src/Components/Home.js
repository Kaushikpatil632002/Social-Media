// import {   Outlet } from 'react-router-dom'
import Posts from '../posts/Posts'
import Stories from '../Stories/Stories'
import './Home.scss'
// import Navbar from './Navbar'
// import LeftBar from './LeftBar'
// import RightBar from './RightBar'
// import LeftBar from './LeftBar'
// import RightBar from './RightBar'
// import LeftBar from './LeftBar'
// import RightBar from './RightBar'
// import Profile from './Profile'

function Home() {



  return (
    <>
   <div className='Home'>
    <Stories/>
    <Posts/>
   </div>
    
    </>
  )
}

export default Home
