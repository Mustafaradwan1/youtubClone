import React from 'react'
import { ApiData } from "../Context/Context";
import { useContext } from "react";
import {VideoCard,ChannelCard,Playlist} from "./"
const Videos = () => {
  const {GetDATA} = useContext(ApiData)
  return <>
  <div className='flex flex-wrap'>
    {GetDATA.items?.map((item,inx)=>(
      <div key={inx} className='w-full md:w-1/2 lg:w-1/3 p-2'>
        {item?.id?.videoId && <VideoCard video={item} />}
        {item?.id?.channelId && <ChannelCard channel={item} />}
        {item?.id?.playlistId && <Playlist play={item} />}
      </div>
    ))}
  </div>
  </>
}

export default Videos