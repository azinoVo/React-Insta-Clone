import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            profile: this.props.objectDummy,
            searchName: ''
        }

    }

    componentDidMount() {
        this.setState({
            profile: this.state.profile 
        })
        console.log(this.state.profile)

    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value);
    }

    onSubmit = event => {
        event.preventDefault();
        //map through copy of array of objectDummy, filtering the one with a specific profile that user type
        this.setState({
            profile: this.state.profile.filter(e=>{
                if(e.username === this.state.searchName) {
                    return e;
                }})
        })
    }


    render() {

        return (
            <>
                <div className='searchbar'>
                <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            name="searchName"
                            onChange={this.onChange} />
                        <button type="submit">Sort by Name</button>
                    </form>
                </div>
            
                {this.props.objectDummy.map((post,index)=> (
                    <div className='main-profile' key={index}>
    
                        <div className='header'>
                            <img src={post.thumbnailUrl} alt="thumbnail"/>
                            <p><strong>{post.profile}</strong></p> 
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