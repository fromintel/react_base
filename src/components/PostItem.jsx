import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <p>{props.post.desc}</p>
            </div>
            <div className="post__actions">
                <button>Remove post</button>
            </div>
        </div>
    )
}

export default PostItem;
