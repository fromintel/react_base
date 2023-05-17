import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <p>{props.post.description}</p>
            </div>
            <div className="post__actions">
                <button>Remove post</button>
            </div>
        </div>
    )
}

export default PostItem;
