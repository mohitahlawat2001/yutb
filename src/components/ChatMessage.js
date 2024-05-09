import usericon from '../assets/usericon.png'

const ChatMessage = ({name,message}) => {
    return (
        <div className='flex items-center shadow-sm p-2' >
            <img src = {usericon} alt="usericon" className='w-5 h-5 rounded-full' />
            <span className='font-bold px-2' >{name}</span>
            <span className='m-2' >{message}</span>
        </div>
    )
}

export default ChatMessage;