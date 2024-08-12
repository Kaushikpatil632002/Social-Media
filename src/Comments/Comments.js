import React, { useContext } from 'react'
import './Comments.scss'
import { AuthContext } from '../AuthContext'


function Comments() {
  const {currentUser}=useContext(AuthContext)

    const comments=[
        {
            id:1,
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            name:"Harshwardhan",
            userId:"1",
            profilepic:"https://images.unsplash.com/photo-1520454125516-134a66d9bf78?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:1,
            desc:" Ut rutrum finibus quam, vel consequat est gravida sed.",
            name:"Sidhant",
            userId:"2",
           profilepic:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
    ]
  return (
    <div className='comments'>
      <div className='write'>
        <img src={currentUser.ProfilePicture} alt=''/>
        <input type='text' placeholder='Write a comment'/>
        <button>Send</button>
      </div>
      {comments.map(comment=>(
        <div className='comment'>
            <img src={comment.profilepic} alt=''/>
            <div className='info'>
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>
        </div>

      ))}
    </div>
  )
}

export default Comments
