import axios from 'axios';

const url = 'type your api here';
export const fetchAll = ()=>axios.get(url);
export const createPost = (newPost)=>axios.post(url, newPost);
export const updatePost = (id,newData)=>axios.patch(`${url}/${id}`, newData)
export const likePost = (id)=>axios.patch(`${url}/${id}/likepost`)
export const deletePost = (id)=>axios.delete(`${url}/${id}`)