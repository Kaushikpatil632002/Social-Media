import React from 'react'
import Post from './Post'
import './Posts.scss'

function Posts() {
    const posts=[
        {
            id:1,
            name:"Aniket",
            userId:1,
            profilePic:"https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img:"https://images.unsplash.com/photo-1691673503514-e34e83b21f83?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:2,
            name:"Kaustubh",
            userId:2,
            profilePic:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9maWxlJTIwcGljJTVDfGVufDB8fDB8fHww",
            desc:"Ut rutrum finibus quam, vel consequat est gravida sed",
            img:"https://images.unsplash.com/photo-1586065176993-4970e7ef2611?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:3,
            name:"Sanket",
            userId:3,
            profilePic:"https://images.unsplash.com/photo-1519814003066-56bd5ba56fb7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc:" Vestibulum eget purus in justo lacinia aliquam sed interdum risus",
            img:"https://images.unsplash.com/photo-1588160049682-9761fcf4d70a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];
  return (
    <div className="posts">
    {posts.map(post=>(
        
        <Post post={post} key={post.id}/>
    ))}
    </div>
    )
    
};

export default Posts;
