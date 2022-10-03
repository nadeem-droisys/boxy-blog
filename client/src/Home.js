import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getPost } from './actions/postActions'
import Post from './Post';
import './Post.css'
import Create from './Create';
import { Link } from 'react-router-dom';

export default function Home() {
  const data = useSelector(state=>state.post)
  const [currentId,setCurrentId] =useState(null)
  const [postData,setPostData] =useState(null)
  
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPost())
  },[dispatch])
  console.log('data',data)

  return (<>
    <div className='home-container'>
    <button className="btn-newpost">
      <Link to='/newpost'>Create new</Link>
    </button>
    <h1>All posts/blogs</h1>
     <div className='posts'>
    {data.map((post)=>{
      return <Post post={post} currentId={currentId} setPostData={setPostData} setCurrentId={setCurrentId} />
    })}</div>
    </div>
    {currentId && <Create  post={postData} currentId={currentId} setCurrentId={setCurrentId}/>}
    </>
  )
}
