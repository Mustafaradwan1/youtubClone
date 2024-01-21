import React from 'react'
import { logo } from '../utils/Yummy'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const Navbar = () => {

  return <>
  <div className='flex items-center justify-between py-2 px-4'>
  
    <Link to="/" >
      <img src={logo} alt='logo' className='h-14' />
    </Link>
    <div>
      <SearchBar/>
    </div>
  </div>
  </>
}

export default Navbar