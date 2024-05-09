import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerate, randomTextGenerate } from "../utils/helper";

const LiveChat = () =>{
    const [liveMessage,setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chat.messages);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('fetching chat messages');
            dispatch(addMessage({name: randomNameGenerate() ,message: randomTextGenerate(30) }))
        }
        ,1000)

        return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
        <div className='bg-slate-200 w-full h-[400px]  p-2 overflow-y-scroll flex-col-reverse flex' >
             {
                 chats.map((chat,index) => {
                        return <ChatMessage key={index} name={chat.name} message={chat.message} />
                    })
                }
        </div>
        
        <form 
        className='w-full p-2 m-2 border border-black'
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({name: 'You', message: liveMessage}));
            setLiveMessage('');
        }}
        >
                <input 
                type="text" 
                className=' w-96 p-2 rounded-lg'
                placeholder='Type your message here'
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
                 />
                 <button 
                 className='bg-blue-500 text-white p-2 rounded-lg' >Send
                 </button>

        </form>

        </>
    )
}

export default LiveChat;