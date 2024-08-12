import React, { useContext } from 'react'
import './Stories.scss'
import { AuthContext } from '../AuthContext'

function Stories() {

    const {currentUser}=useContext(AuthContext)

    const stories=[
        {
            id: 1,
            name:"Rohan",
            img:"https://images.unsplash.com/photo-1436491911682-72ab1d398f59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name:"Aniket",
            img:"https://images.unsplash.com/photo-1436491911682-72ab1d398f59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name:"Sanket",
            img:"https://images.unsplash.com/photo-1436491911682-72ab1d398f59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            name:"Kaustubh",
            img:"https://images.unsplash.com/photo-1436491911682-72ab1d398f59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
      ]
      
  return (
    <div className='stories'>
         <div className='story'>
         <img src={currentUser.ProfilePicture} alt=''/>
        <span>{currentUser.name}</span>
        <button>+</button>
        </div>
      {stories.map(story=>(
        <div className='story' key={story.id}>
            <img src={story.img} alt=''/>
            <span>{story.name}</span>
        </div>

      ))}

    </div>
  )
}

export default Stories
