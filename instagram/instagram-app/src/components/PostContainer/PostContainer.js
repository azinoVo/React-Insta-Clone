import React from 'react';
import PropTypes from 'prop-types';
// import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (
        <>
            {props.objectDummy.map((post,index)=> (
                <div className='main-profile' key={post.index+100}>
                    <h2>{post.username}</h2>
                    <img src={post.thumbnailUrl} alt="thumbnail"/>
                    <img src={post.imageUrl} alt="profile"/>
                    <p>Likes: {post.likes}, Time: {post.timestamp}</p>
                    <div className='comment-section'>
                        {post.comments.map((comment,index)=>
                        <p key={index}><strong>{comment.username}</strong>: {comment.text}</p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );   
}

PostContainer.propTypes = {
    objectDummy: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                    PropTypes.shape({
                        username: PropTypes.string,
                        text: PropTypes.string
                    }))
            }))
    }

PostContainer.defaultProps = {
    objectDummy: []
      };
      
export default PostContainer;