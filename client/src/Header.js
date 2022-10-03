import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
        <h1><Link to='/'>BoxyBlog</Link></h1>
        <h2><Link to='/'>Home</Link></h2>
        <h2><Link to='/newpost'>Create</Link></h2>
    </div>
  )
}
