import React from 'react';
import Comment from '../Comment/Comment';

// Function or Class Here
{/* <CommentSection commentsArray={props.objectDummy.comments} /> */}
// This component takes an array of 
// [
//     {
//       username: "philzcoffee",
//       text:
//         "We've got more than just delicious coffees to offer at our shops!"
//     },
//     {
//       username: "biancasaurus",
//       text: "Looks delicious!"
//     },
//     {
//       username: "martinseludo",
//       text: "Can't wait to try it!"
//     }
//   ]
// comments is an array of multiple of username and text (must use map)

const CommentSection = props => {
    return (
        <div>
            {props.commentsArray.map(commentsduo=>{
                <Comment info={commentsduo} />
            })}
        </div>
    );
}


export default CommentSection;