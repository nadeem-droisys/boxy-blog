import mongoose from "mongoose";
import postMessage from "./postModel.js";

export const getAll = async(req,res)=>{
    console.log('getAll')
    try {
        const postMsg = await postMessage.find();
        res.status(200).json(postMsg)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async(req,res)=>{
    const post = req.body;
    const newPost = new postMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)       

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const getOne = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const updatePost = async (req, res)=>{
    const {id} = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json('no post with this id')
     const updatedPost = { title, message, creator, selectedFile, tags,_id: id }
        await postMessage.findByIdAndUpdate(id,updatedPost,{new:true}) 
 res.status(200).json(updatedPost)      
}

export const deletePost =async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json('no post with this id')
    await postMessage.findByIdAndRemove(id)
    res.status(200).json({message:'post deleted successfully'})
}
export const likePost= async(req,res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json('no post found with this id')
    const post = await postMessage.findById(id)
    const updatedPost = await postMessage.findByIdAndUpdate(id, {likeCount: parseInt(post.likeCount)+1}, {new:true})
    res.status(200).json(updatedPost)
}