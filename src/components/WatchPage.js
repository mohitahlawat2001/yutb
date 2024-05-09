/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v') )  ;
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(closeMenu());
    },[])

    return (
        <div className="flex flex-col w-full " >
        <div className='px-5 flex' >
            <div>

            <iframe 
            width="800" 
            height="400" 
            src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer;
            autoplay; clipboard-write; 
            encrypted-media; gyroscope; 
            picture-in-picture" 
            allowFullScreen></iframe>
            </div>
            <div className=' m-2  rounded-lg border-blue-300 border w-full ' >
                <LiveChat/>
            </div>
        
        </div>

        <div>
            <CommentContainer/>
        </div>
        
        </div>
    );
    }

export default WatchPage;