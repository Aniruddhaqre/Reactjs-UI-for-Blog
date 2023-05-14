import React from 'react'
import "./posts.css"
import Post from '../post/Post'

export default function Posts({posts}) {
 
console.log(posts);
  return (
    <div className='posts'>
     {posts.map((p) => {
      return <Post key={posts._id} post={p}/>
     })}
    </div>
  )
}
