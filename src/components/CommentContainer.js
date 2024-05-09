import usericon from '../assets/usericon.png';

const commentData = [
    {
        name: 'John Doe',
        comment: 'This is a comment',
        replies: [{
        name: 'John Doe',
        comment: 'This is a comment',
        replies: [],
    },
    {
        name: 'Jane Doe',
        comment: 'This is a comment',
        replies: [
            {
                name: 'John Doe',
                comment: 'This is a comment',
                replies: [],
            },
            {
                name: 'Jane Doe',
                comment: 'This is a comment',
                replies: [],
            }
        ],
    },
    {
        name: 'John Doe',
        comment: 'This is a comment',
        replies: [],
    },
    {
        name: 'Jane Doe',
        comment: 'This is a comment',
        replies: [
            {
                name: 'John Doe',
                comment: 'This is a comment',
                replies: [],
            },
            {
                name: 'Jane Doe',
                comment: 'This is a comment',
                replies: [],
            }
        ],
    },],
    },
    {
        name: 'Jane Doe',
        comment: 'This is a comment',
        replies: [
            {
                name: 'John Doe',
                comment: 'This is a comment',
                replies: [],
            },
            {
                name: 'Jane Doe',
                comment: 'This is a comment',
                replies: [],
            }
        ],
    },
    {
        name: 'John Doe',
        comment: 'This is a comment',
        replies: [],
    },
    {
        name: 'Jane Doe',
        comment: 'This is a comment',
        replies: [
            {
                name: 'John Doe',
                comment: 'This is a comment',
                replies: [],
            },
            {
                name: 'Jane Doe',
                comment: 'This is a comment',
                replies: [],
            }
        ],
    },

]

const Comment = ({data}) =>{
    const {name, comment} = data;
    return (
        <div className='p-2 m-2 flex flex-row shadow-md bg-gray-200 rounded-md' >
            <img src={usericon} alt="usericon" className='w-8 h-8 rounded-full my-2' />
            <div className='px-3' >
            <h1 className=' font-bold text-2xl' > {name} </h1>
            <p className='text-lg' > {comment} </p>
            </div>
        </div>
    )
}

const CommentList = ({data}) =>(
            data.map((comment, index) => 
            (
                <div key={index} >
                    <Comment  data={comment} />  
                    {comment.replies.length > 0 && 
                    <div className='pl-5 ml-5  border-l-blue-600 border  ' >
                    <CommentList data={comment.replies} />     
                    </div> 
                    }
                </div>
            )));
       

const CommentContainer = ()=>{
    return (
        <div className="p-2 m-2" >
                <h1 className=' font-bold text-3xl ' > Comments </h1>
                <CommentList data={commentData} />
        </div>
    )
}

export default CommentContainer;