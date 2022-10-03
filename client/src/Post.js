import React from 'react'
import { deletePost, likePost } from './actions/postActions';
import { useDispatch } from 'react-redux';
import './Post.css'
export default function Post({post,currentId, setCurrentId,setPostData}) {
  const dispatch = useDispatch();
  return (
    <div className='post'>
        <div><img className='post-image' src={post.selectedFile} alt='err' /></div>
        <h1>{post.title}</h1>
        <h3>{post.message}</h3>
        <h5>By {post.creator}</h5>
        <p>At {post.createdAt.split('T')[0]}</p>
        <div className='post-btns'>
        <button onClick={()=>{setCurrentId(post._id);setPostData(post)}} className='edit-btn'>edit</button>
        <button onClick={()=>{dispatch(deletePost(post._id))}} className='delete-btn'>Delete</button>
        </div>
    </div>
  )
}
