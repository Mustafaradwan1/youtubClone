
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiData } from "../Context/Context";
import { useContext } from "react";
const PlaylistDetail = () => {
  const {id} = useParams()
  const {PlaylistData,PlaylistOrder,PlayList,Playdata} = useContext(ApiData)

  useEffect(()=>{
    PlaylistData(`playlists?part=snippet&id=${id}`)
    PlaylistOrder(`search?playlistId=${id}&part=snippet&order=date`)
  },[id])

  return <>
  <div className='py-5 h-auto'>
    <div className='h-64 sm:h-96' style={{background:"linear-gradient(90deg, rgba(32,32,59,1) 0%, rgba(9,104,123,1) 81%)"}}></div>
    <div className='w-48 h-48 absolute text-center left-1/2 -translate-x-1/2 -translate-y-24'>
      <img className='h-full w-full rounded-full ' src={Playdata?.snippet?.thumbnails?.high?.url} alt='' />
      <p className='text-white mt-3 mb-2'>{Playdata?.snippet?.title}</p>
      <p className='text-gray-500'>subscriber {Playdata?.statistics?.subscriberCount}</p>
    </div>
    <div className='mt-56'>
      <div>
        {PlayList !== "" ? <div className='flex flex-wrap sm:px-10 md:px-20 '>
          {PlayList?.map((ele)=>(
          <div className='w-full sm:w-1/2 lg:w-1/3 px-3 mb-4'>
           <div className=''>
            <img className='h-56 w-full object-cover' src= {ele.snippet?.thumbnails?.high?.url}  alt='' />
           </div>
          </div>
          ))}
          </div> : null}
      </div>
    </div>
  </div>
  

  </>
}

export default PlaylistDetail