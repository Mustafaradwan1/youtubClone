import React, { useState } from 'react'
import { categories } from '../utils/Yummy'
import { ApiData } from "../Context/Context";
import { useContext } from "react";
const Sidebar = () => {
  const [Active,setActive] = useState("New")
  const {setQuery} = useContext(ApiData)
  return <>
  <div className='flex sm:flex-col sm:w-48 overflow-y-auto w-full sm:border-r pr-3 pb-5'>
    {categories.map((ele)=>(
      <button onClick={()=>{
        setActive(ele.name)
        setQuery(ele.name)
      }} key={ele.name} className={Active === ele.name ? `category-btn bg-red-500 px-5  sm:py-2`  :`category-btn bg-transparent px-5  sm:py-2`}>
        <span className={Active === ele.name ? `mr-2 text-white`  :`mr-2 text-red-500`}>{ele.icon}</span>
        <span>{ele.name}</span>
      </button>
    ))}
  </div>
  </>
}

export default Sidebar