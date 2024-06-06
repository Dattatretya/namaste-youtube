import React from 'react'
///import {useNavigate} from "react-router-dom"

const VideoCard = ({info}) => {
  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails} = snippet
  
    return (
    <div className='m-2 p-2 shadow-lg w-72'>
        <img className='rounded w-[275px] h-44' src={thumbnails.high.url}/>
        <p className='text-lg font-bold'>{title}</p>
        <p className=' text-gray-400'>{channelTitle}</p>
        <div>
            <p className=' text-gray-400'>{statistics.viewCount/1000000}M</p>
        </div>
    </div>
  )
}



export default VideoCard