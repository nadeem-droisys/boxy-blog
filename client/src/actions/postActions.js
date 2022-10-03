import * as api from '../api/api'

export const createPost = (post,navigate)=>async(dispatch)=>{
    console.log('bb', dispatch, 'ff', post)
    try {
        const {data} = await api.createPost(post);
        dispatch({type:'CREATEPOST', payload:data})
        navigate('/')
    } catch (error) {
        console.log(error.message)
    }
}
export const getPost = ()=>async(dispatch)=>{
    try {
        const {data} = await api.fetchAll();
        dispatch({type:'FETCHPOST', payload:data})
    } catch (error) {
        console.log(error.message)
    }
}
export const updatePost = (id,post)=>async(dispatch)=>{
    console.log('action', post)
    const {data} = await api.updatePost(id,post);
    console.log('dataz', data)
        try{
        dispatch({type:'UPDATE', payload:data})
        } catch (error){
            console.log("error hai ji",error)
        }
}
export const deletePost = (id)=> async(dispatch)=>{
    await api.deletePost(id)
    dispatch({type:'DELETE',payload:id})
}
export const likePost = (id)=> async (dispatch)=>{
    const {post} = await api.likePost(id);
    try {
        dispatch({type:'LIKE', payload:post})
    } catch (error) {
        console.log(error)
    }
}