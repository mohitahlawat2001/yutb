import React, { useEffect , useState } from 'react'
import hamburger from '../assets/hamburger.png'
import userIcon from '../assets/usericon.png'
import youtubeLogo from '../assets/youtube.png'
import searchlogo from '../assets/search.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice'


const Header = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [Suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector(state => state.search);
  // console.log(searchQuery);

  

  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }else{
        searchSuggestions(searchQuery);
      }
    }, 500);

    return () => clearTimeout(timer);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  

  const searchSuggestions = async (query) => {
    try {
      const response = await fetch( YOUTUBE_SEARCH_API + query);
      const data = await response.json();
      // console.log(data[1]);
      setSuggestions(data[1]);
      setSearchCache(query, data[1]);
    } catch (error) {
      console.log(error);
    }
  }


  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }

  const setSearchCache = (query, suggestions) => {
    dispatch(cacheResults({[query]: suggestions}));
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
        <div>

        <input 
        className='border border-gray-300 rounded-s-full  py-2 w-1/2 mx-0.5 text-center'
        type="text" 
        placeholder="Search"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className='border bg-red-500 text-white rounded-e-full py-2 px-5'>
          <img className='h-6' src={searchlogo} alt="Search Logo" />
        </button>
        </div>
        { showSuggestions && Suggestions.length > 0 && (
        <div className='absolute bg-white px-2 py-2  w-1/3 shadow-lg rounded-lg border-gray-100 ' >
          <ul>
            {
              Suggestions.map((suggestion, index) => (
                <li key={index} className=' px-1 py-2 m-1 shadow-sm hover:bg-gray-100 ' >{suggestion}</li>
              ))
            }
          </ul>
        </div>
        )}
      </div>

      <div className='col-span-1' >
        {/* user icon */}
      <img  className='h-9' src ={userIcon} alt="User Icon" />
      </div>

    </div>
  )
}

export default Header