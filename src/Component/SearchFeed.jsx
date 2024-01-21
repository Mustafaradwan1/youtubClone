import React, { useEffect } from "react";
import {Sidebar,Videos} from "./";
import { ApiData } from "../Context/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const {searchTerm} = useParams()
  const {VideoApi} = useContext(ApiData)
  useEffect(()=>{
    VideoApi(`search?part=snippet&q=${searchTerm}`)
  },[searchTerm])
  return <>
  <div className="p-10">
    <div className="flex-1"><Videos/></div> 
  </div>
  </>
}

export default SearchFeed




