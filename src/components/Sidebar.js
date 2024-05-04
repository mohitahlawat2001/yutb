import React from 'react'

const Sidebar = () => {
  return (
    <div className=' p-5 shadow-lg w-48' >
      <h1 className='font-bold' >Home</h1>
      <ul>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
      <h1 className='font-bold pt-5' >Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>News</li>
        <li>Entertainment</li>
      </ul>
      <h1 className='font-bold pt-5' >More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>Live</li>
        <li>Learning</li>
        <li>YouTube Gaming</li>
        <li>YouTube Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar;