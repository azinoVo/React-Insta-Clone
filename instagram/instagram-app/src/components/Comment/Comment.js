import React from 'react';

// Function or Class Here
// This component takes the  
        // username: "biancasaurus",
        // text: "Looks delicious!"
// from CommentSection as prop and displays them

class Comment extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.comment.username}</p>
                <p>{this.props.comment.text}</p>
            </div>
        );
    }       
}


export default Comment;