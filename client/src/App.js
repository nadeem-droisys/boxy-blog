import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getPost } from './actions/postActions'
import Header from './Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Create from './Create';
function App() {
  const data = useSelector(state=>state.post)
  
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getPost())
  // },[dispatch])
  // console.log('data',data)

  return (
    <><BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/newpost' element={<Create/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
