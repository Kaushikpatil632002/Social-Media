import React from 'react';

import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes,Route,Outlet, Navigate} from 'react-router-dom';
import Navbar from './Components/Navbar';
import LeftBar from './Components/LeftBar';
import RightBar from './Components/RightBar';
import Home from './Components/Home';
import Profile from './Components/Profile';
import './style.scss'
import { DarkModeContext } from './darkModeContext';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';


function App() {
  const {currentUser}=useContext(AuthContext);
  const{darkMode}=useContext(DarkModeContext);

  const Layout=()=>{
    return(
    
        <div className={`theme-${darkMode?"dark":"light"}`}>
            <Navbar/>
            <div style={{display:"flex"}}>
                <LeftBar/>
                <div style={{flex:6}}>
                <Outlet/>
                </div>
                
                <RightBar/>
            </div>
        </div>
     
    )
}

const ProtectedRoute=({children})=>{
  if(!currentUser){
    return <Navigate to='/Login'/>;
  }
  return children;
}


  return (
    <>

    <Routes>
         
         <Route path='/' element={<ProtectedRoute><Layout/></ProtectedRoute>}>
           <Route path='/' element={<Home/>}/>
           <Route path='/Profile/:id' element={<Profile/>}/>
         </Route>

        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>

    </Routes>
    </>
  );
}

export default App;
