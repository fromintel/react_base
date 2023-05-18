import React from 'react';
import CoreButton from './UI/CoreButton/CoreButton';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <div className="post__actions">
                <CoreButton onClick={() => props.remove(props.post)}>Remove post</CoreButton>
            </div>
        </div>
    )
}

export default PostItem;
