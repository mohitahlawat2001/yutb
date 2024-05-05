import React, { useEffect , useState} from 'react'
import Videocard from './Videocard'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { Link } from 'react-router-dom';

const Videocontainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, [])

const getVideos = async () => {
    try {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const data = await response.json();
        // console.log(data.items);
        setVideos(data.items);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='flex flex-wrap p-2 m-2 ' >
        {videos[0]?.snippet?.title && videos.map(video => (
            <Link to={`/watch?v=${video.id}`} >
            <Videocard key={video.id} info={video} />
            </Link>
        ))}
    </div>
  )
}

export default Videocontainer;