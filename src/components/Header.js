import React from 'react'
import hamburger from '../assets/hamburger.png'
import userIcon from '../assets/usericon.png'
import youtubeLogo from '../assets/youtube.png'
import searchlogo from '../assets/search.png'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow'>
      
      <div className='flex col-span-1'>

      {/* hambuger menu logo */}
      <img  
      onClick = {()=>toggleMenuHandler()}
      className=' h-9 mx-5 cursor-pointer ' 
      src={hamburger} 
      alt="Hamburger Menu" 

      />
      {/* YouTube logo */}
      <img  className=' h-9 mx-2 px-5'  src={youtubeLogo} alt="YouTube Logo" />
      </div>

      <div className='col-span-10 px-10' >
        {/* Search bar */}
        <input className='border border-gray-300 rounded-s-full  py-2 w-1/2 mx-0.5 text-center' type="text" placeholder="Search" />
        <button className='border bg-red-500 text-white rounded-e-full py-2 px-5'>
          <img className='h-6' src={searchlogo} alt="Search Logo" />
        </button>
      </div>

      <div className='col-span-1' >
        {/* user icon */}
      <img  className='h-9' src ={userIcon} alt="User Icon" />
      </div>

    </div>
  )
}

export default Header