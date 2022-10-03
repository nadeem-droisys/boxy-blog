import React,{useEffect, useState} from "react";
import './Create.css';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from "./actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Create({currentId,setCurrentId}) {
  let navigate=useNavigate()
    const [formData, setFormData] = useState({name:'',title:'',message:'',file:''})
    const dispatch = useDispatch()
    const post = useSelector(p=>currentId?p.post.find((e)=>(currentId===e._id) ):null)
  const submitForm = (e) => {
    e.preventDefault();
    console.log('submit data', formData)
    if(currentId){dispatch(updatePost(currentId, formData)); setCurrentId(null);}
    else{dispatch(createPost(formData,navigate))}
    // clearform();
  };
 useEffect(()=>{
    if(post) setFormData(post)
    console.log('posty', post)
 },[currentId])
  const clearform = () => {
    console.log('cleared')
    // setCurrentId(null)
    setFormData({...formData, creator:'',title:'',message:'',selectedFile:''})
  };

  return (
    <div className="create">
      <button className="btn-back-to-home"><Link to='/'>Back to Home</Link></button>
      <h1>{currentId?'Update':'Create'} Post</h1>
      <form className="form-element" onSubmit={submitForm}>
        <input type="text" placeholder="type youre title" value={formData.title} onChange={(e)=>setFormData({...formData, title:e.target.value})} />
        <input type="text" value={formData.message} placeholder="type youre description/message" onChange={(e)=>setFormData({...formData, message:e.target.value})}/>
        <input type="text" value={formData.creator} placeholder="type youre name" onChange={(e)=>setFormData({...formData, creator:e.target.value})}/>
        <FileBase
        type='file'
        multiple={false}
        onDone={({base64})=>setFormData({...formData,selectedFile:base64}) } />
        
          <button className="submit-btn" type="submit">{currentId?'Update':'Submit'} form</button>
          <button onClick={clearform} className="clear-btn">clear form</button>
      </form>
    </div>
  );
}
