import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            
        }

    }

    render() {

        return (
            <>
                <h3>Welcome {localStorage.getItem('username')}</h3>
                {this.props.objectDummy.map((post,index)=> (
                    <div className='main-profile' key={index}>
    
                        <div className='header'>
                            <img src={post.thumbnailUrl} alt="thumbnail"/>
                            <p><strong>{post.username}</strong></p> 
                        </div>
    
                        <div className='picture'><img src={post.imageUrl} alt="profile" className='profile-image'/></div>
    
                        <div className='comment-section'>
                            
                            <p><strong>Posted On</strong>: {post.timestamp}</p>
                            
                            <CommentSection post={post} />

                        </div>
    
                    </div>
                ))}
            </>
        );
    }   
}

//isRequired can also be added to the PropTypes to ensure a component is always present; if not, error
// PropTypes will need to be updated!

PostContainer.propTypes = {
    objectDummy: PropTypes.arrayOf(
        PropTypes.shape({
            profile: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                    PropTypes.shape({
                        profile: PropTypes.string,
                        text: PropTypes.string
                    }))
            }))
    }

// Default for objectDummy initial array is an empty array
PostContainer.defaultProps = {
    objectDummy: []
      };
      
export default PostContainer;