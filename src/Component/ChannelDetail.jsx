import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiData } from "../Context/Context";
import { useContext } from "react";

const ChannelDetail = () => {
  const {id} = useParams()
  const {ChannelData,ChannelOrder,IdData,IdPart} = useContext(ApiData)

  useEffect(()=>{
    ChannelData(`channels?part=snippet&id=${id}`)
    ChannelOrder(`search?channelId=${id}&part=snippet&order=date`)
  },[id])

  return <>
  <div className='py-5 h-auto'>
    <div className='h-64 sm:h-96' style={{background:"linear-gradient(90deg, rgba(32,32,59,1) 0%, rgba(9,104,123,1) 81%)"}}></div>
    <div className='w-48 h-48 absolute text-center left-1/2 -translate-x-1/2 -translate-y-24'>
      <img className='h-full w-full rounded-full ' src={IdData.snippet?.thumbnails?.high?.url} alt='' />
      <p className='text-white mt-3 mb-2'>{IdData?.snippet?.title}</p>
      <p className='text-gray-500'>subscriber {IdData?.statistics?.subscriberCount}</p>
    </div>
    <div className='mt-56'>
      <div>
        {IdPart !== "" ? <div className='flex flex-wrap sm:px-10 md:px-20 '>
          {IdPart?.map((ele)=>(
          <div key={ele.id.videoId} className='w-full sm:w-1/2 lg:w-1/3 px-3 mb-4'>
           <Link to={`/video/${ele.id.videoId}`}>
            <img className='h-56 w-full object-cover' src= {ele.snippet?.thumbnails?.high?.url}  alt='' />
           </Link>
          </div>
          ))}
          </div> : null}
      </div>
    </div>
  </div>
  

  </>
}

export default ChannelDetail