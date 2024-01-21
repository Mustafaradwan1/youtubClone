import React from 'react'
import { Link } from 'react-router-dom'
const ChannelCard = ({channel}) => {
  return <>
  <div className=' h-72 bg-gray-900 mb-2'>
    <Link to={channel.id.channelId ? `/channel/${channel.id.channelId }` : null} >
       <img className='w-full object-cover h-48 ' src={channel.snippet?.thumbnails?.high?.url} alt=''/>
       <div className='py-2 px-3'>
       <h2 className='text-white'>{channel.snippet?.title}</h2>
       </div>
    </Link>
  </div>
  </>
}

export default ChannelCard