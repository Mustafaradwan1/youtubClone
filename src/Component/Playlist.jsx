import React from 'react'
import { Link } from 'react-router-dom'

const Playlist = ({play}) => {
  return <>
    <div className=' h-72 bg-gray-900 mb-2'>
    <Link to={play.id.playlistId ? `/playlist/${play.id.playlistId }` : null} >
       <img className='w-full object-none h-48 ' src={play.snippet?.thumbnails?.high?.url} alt=''/>
       <div className='py-2 px-3'>
       <h2 className='text-white'>{play.snippet?.title}</h2>
       </div>
    </Link>
  </div>
  </>
}

export default Playlist