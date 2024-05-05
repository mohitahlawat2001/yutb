import React from 'react'

const Videocard = ({info}) => {
  console.log(info);
  
  const {snippet, statistics} = info;
  const {title, channelTitle, thumbnails} = snippet;
  const {viewCount, likeCount} = statistics;
  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-md' >
      <img className='rounded-lg ' src={thumbnails.medium.url} alt={title} />
      <h2 className='font-bold py-2 mx-2' >{title}</h2>
      <ul>
      <li>{channelTitle}</li>
      <li>Views: {viewCount}</li>
      <li>Likes: {likeCount}</li>
      </ul>
    </div>
  )
}

export default Videocard;