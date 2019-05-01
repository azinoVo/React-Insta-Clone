import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
// import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (
        <>
            {props.objectDummy.map((post,index)=> (
                <div className='main-profile' key={post.username}>

                    <div className='header'>
                        <img src={post.thumbnailUrl} alt="thumbnail"/>
                        <p><strong>{post.username}</strong></p> 
                    </div>

                    <div className='picture'><img src={post.imageUrl} alt="profile" className='profile-image'/></div>

                    <div className='comment-section'>
                        <p><strong>Likes</strong>: {post.likes}</p>
                        <p><strong>Posted On</strong>: {post.timestamp}</p>
                        <h2>Comments</h2>
                        {post.comments.map((comment,index)=>
                        <p key={index+1000}><strong>{comment.username}</strong>: {comment.text}</p>
                        )}
                        <AddCommentForm id={index} comments={post.comments} />
                    </div>

                </div>
            ))}
        </>
    );   
}

//isRequired can also be added to the PropTypes to ensure a component is always present; if not, error

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

// Default for objectDummy initial array is an empty array
PostContainer.defaultProps = {
    objectDummy: []
      };
      
export default PostContainer;