import React, { useEffect, useState } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';

export default function Home() {
  const [posts , setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post")
      setPosts(res.data)
      // console.log(res.data)
      
    }
    fetchPosts()
  } ,[])
 
  console.log(posts)
  

  return (
    <>
    <Header/>
    <div className='home'>
    <Posts posts={posts}/>
    <Sidebar/>
    </div>
    </>
  )
}
