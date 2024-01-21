import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
const VideoCard = ({video : {id : {videoId},snippet}}) => {
  return <>
  <div className=' h-72 bg-gray-900 mb-2'>
    <Link to={videoId ? `/video/${videoId}` : null} >
       <img className='w-full object-none h-48 ' src={snippet?.thumbnails?.high?.url} alt=''/>
    </Link>
    <div className='px-3 py-2'>
    <Link to={videoId ? `/video/${videoId}` : null} >
       <h2 className='text-white'>{snippet?.title.slice(0,60)}</h2>
    </Link>
    <Link className='flex gap-2 mt-2' to={snippet?.channelId ? `/channel/${snippet?.channelId}` : null} >
       <h2 className='text-gray-500'>{snippet?.channelTitle.slice(0,60)}</h2>
       <FaCheckCircle className='text-white' />
    </Link>
    </div>
  </div>
  </>
}

export default VideoCard