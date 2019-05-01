import React from 'react';
import Comment from '../Comment/Comment';

// Function or Class Here
// passing props from PostContainer
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            likes: []
        }

    }
    // when comment is rendered in the DOM, we want to set the state equal to props we passed in
    // Use this to setState temporarily 
    // this allows child to have access to the parent props as state data

    componentDidMount() {
        this.setState({
            comments: this.props.post.comments,
            likes: this.props.post.likes
        })
    }

    // On form event, click or submit, we want to set stae equal to value of input field
    // concat combines two or more arrays
    // use querySelector to find element that we want to set the value equal to text
    // .value is whatever is within input

    onSubmit = event => {
        event.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments].concat(
                    {
                        username: 'Insta-bot',
                        text: event.target.querySelector('.comment-form').value
                    }
                )
        })
    }

    loveHandles = () => {
        // alert('test');
        this.setState({
            likes: this.state.likes + 1
        })
    }

    // && just means it needs both has to be true
    // Ask about && has to be true on both true

    render() {
        const comments = this.state.comments;
        return (

            <div>
                <div>
                    <i onClick={this.loveHandles} className="far fa-heart" />
                    {/* <i onClick={this.addComment} className="far fa-comment" /> */}
                </div>
                <p><strong>Likes</strong>: {this.state.likes}</p>

                <h2>Comments</h2>

                <div>
                    {comments && comments.map((comment, i) =>
                        <Comment key={i} comment={comment} />)}
                </div>

                <div className='comment-form'>
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            name="comment"
                            className="comment-form"
                            onChange={this.onUpdate} />
                        <button type="submit">Add Comment</button>
                    </form>
                </div>
            </div>
        );

    }
}

export default CommentSection;