import mongoose from "mongoose";

const postMsg = mongoose.Schema({
    title: String, message: String, creator: String, tags: [String], createdAt: {type: Date, default: new Date()}, likeCount: {
        type:Number, default:0
    }, selectedFile: String
})
const postMessage = mongoose.model('posts', postMsg)
export default postMessage;