import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const Navigate = useNavigate()
  const [TheValue,setTheValue] = useState("")

  const handlesubmit = (e)=>{
    e.preventDefault()
    if(TheValue) {
      Navigate(`/search/${TheValue}`)
    }
  }
  return <>
  <div style={{position:"sticky"}}>
  <form className='flex items-center bg-white rounded-full pr-3' 
  onSubmit={handlesubmit}
  >
    <input className='rounded-full outline-none w-64 px-4 py-1.5' onChange={(e)=>{setTheValue(e.target.value)}} value={TheValue}
     placeholder='Search . . .' type='search' />
     <button>
      <CiSearch className='text-red-500 text-2xl '/>
     </button>
  </form>
  </div>
  </>
}

export default SearchBar