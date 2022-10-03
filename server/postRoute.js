import express from 'express';
import {createPost, getAll, updatePost,getOne, deletePost,likePost} from './postCntroller.js'
let router = express.Router();


router.get('/',getAll);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.get('/:id',getOne);
router.delete('/:id',deletePost);
router.patch('/:id/likepost',likePost);

export default router;