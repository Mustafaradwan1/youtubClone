import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiData } from "../Context/Context";
import { useContext } from "react";
import ReactPlayer from 'react-player';
import { FaCheckCircle } from "react-icons/fa";
const VideoDetail = () => {
  const {VideoPlayer,Player,Videotype,Type} = useContext(ApiData)
  const [SeeMore,SetSeeMore] = useState(false)
  const {snippet,statistics} = Player
  const {id} = useParams()
  useEffect(()=>{
    VideoPlayer(`videos?part=snippet,statistics&id=${id}`)
    Videotype(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  },[id])

  return <>
  <div className='h-auto flex flex-col-reverse lg:flex-row  px-5 '>
    <div className='lg:w-[40%] w-full '>
        {Type.map((ele)=>(
           <Link  key={ele.id.videoId} to={ele.id.videoId ? `/video/${ele.id.videoId}` : null} >
            <div className='px-5 w-full text-white flex items-center mb-5'>
              <div className='flex-1 pr-10 lg:pr-0'>
             <h3>{ele.snippet.title}</h3>
             <h3>{ele.snippet.channelTitle}</h3>
             <h3>{ele.snippet.publishTime}</h3>
              </div>
              <div className='w-[45%] '>
              <img className='w-full' src={ele.snippet?.thumbnails?.high?.url} alt='' />
              </div>
            </div>
           </Link>
        ))}
    </div>
    <div className='lg:w-[60%] w-full mb-10 text-white'>
      <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
      <p className='mt-5 mb-3'>{snippet?.title}</p>
      <div className='flex justify-between'>
        <Link to={`/channel/${snippet?.channelId}`} className='text-white flex gap-2' >
          {snippet?.channelTitle}
          <FaCheckCircle/>
        </Link>
        <div className='text-white flex gap-4'>
          <span>{parseInt(statistics?.viewCount).toLocaleString()} views</span>
          <span>{parseInt(statistics?.likeCount).toLocaleString()} likes</span>
        </div>
      </div>
      <div className='mt-5 p-5 bg-gray-600 rounded-lg '>
        {SeeMore ?
      <div>
           <span>{snippet?.description}</span> 
           <span className='cursor-pointer text-red-400' onClick={()=>SetSeeMore(!SeeMore)}>... See Less</span>
      </div>
        :  
        <div>
            <span>{snippet?.description.slice(0,150)}</span>
            <span className='cursor-pointer text-red-400' onClick={()=>SetSeeMore(!SeeMore)}>... See More</span>
        </div>
        }
        
          
        </div>
    </div>
  </div>
  
  </>
}

export default VideoDetail