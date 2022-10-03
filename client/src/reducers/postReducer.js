const post = (posts=[], action)=>{
    switch (action.type) {
        case 'CREATEPOST':
        return [...posts,action.payload];
        case 'FETCHPOST':
        return action.payload;
        case 'DELETE':
            return posts.filter(e=>e._id!==action.payload)
        case 'UPDATE':
            return posts.map((post)=>(post._id===action.payload._id?action.payload:post));
        case 'LIKE':
            return posts.map((post)=>(post._id===action.payload._id?action.payload:post))
        default:
            return posts
    }
}
export default post;
