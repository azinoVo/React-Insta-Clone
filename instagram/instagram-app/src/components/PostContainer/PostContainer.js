import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';
import './PostContainer.css';



class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {

    //     const N = styled.h1`
            // CSS here
    // `

    const Profile = styled.div`
        width:100%;
        height:auto;
        display:flex;
        margin:10px 0;
        flex-direction:column;
        justify-content:center;
        align-content:center;
        border:2px solid lightblue;
    `


        return (
            <>
                {this.props.objectDummy.map((post, index) => (
                    <Profile key={index}>
                        <div className='header'>
                            <img src={post.thumbnailUrl} alt="thumbnail" />
                            <p><strong>{post.username}</strong></p>
                        </div>
                        <div className='picture'>
                            <img src={post.imageUrl} alt="profile" className='profile-image' />
                        </div>
                        <div className='comment-section'>
                            <p><strong>Posted On</strong>: {post.timestamp}</p>
                            <CommentSection post={post} />
                        </div>
                    </Profile>
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