import React from 'react';

// Function or Class Here
{/* <Comment info={commentsduo} /> */}
// This component takes the  
        // username: "biancasaurus",
        // text: "Looks delicious!"
// from CommentSection as prop and displays them
//                 <Comment info={commentsduo} />


const SearchBar = props => {
    return (
        <div>
            <p>{props.info.username}</p>
            <p>{props.info.text}</p>
        </div>
    );
}


export default Comment;