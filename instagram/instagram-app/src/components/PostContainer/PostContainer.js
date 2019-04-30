import React from 'react';
// import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (
        <>
            {props.objectDummy.map((post,index)=> (
                <div className='main-profile' key={post.index+100}>
                    <h2>{post.username}</h2>
                    <img src={post.thumbnailUrl} alt="thumbnail"/>
                    <img src={post.imageUrl} alt="profile"/>
                    <p>{post.likes}, {post.timestamp}</p>
                    <div className='comment-section'>
                        {post.comments.map((comment,index)=>
                        <p key={index}>{comment.username}: {comment.text}</p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );    
}

export default PostContainer;