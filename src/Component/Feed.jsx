
import React, { useEffect } from "react";
import {Sidebar,Videos} from "./";
import { ApiData } from "../Context/Context";
import { useContext } from "react";
const Feed = () => {
  const {VideoApi,Query} = useContext(ApiData)
  useEffect(()=>{
    VideoApi(`search?part=snippet&q=${Query}`)
  },[Query])

  return <>
  <div className="flex flex-col sm:flex-row">
    <div className="w-full sm:w-64"><Sidebar/></div> 
    <div className="flex-1 px-5 mt-10"><Videos/></div> 
  </div>
  </>
}

export default Feed