import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostsService from '../api/PostsService';
import CoreLoader from '../components/UI/CoreLoader/CoreLoader';

const PostDetails = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostId, isPostLoading] = useFetching(async (id) => {
        const response = await PostsService.getById(id);
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading] = useFetching(async (id) => {
        const response = await PostsService.getCommentsByPostId(id);
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostId(params.id);
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{post.id} - {post.title}</h2>
            {
                isPostLoading
                    ? <CoreLoader/>
                    : <div>{post.body}</div>
            }
            <section className='comments'>
                <h3>Comments</h3>
                {
                    isCommentsLoading
                        ? <CoreLoader/>
                        : <div className='comments__container'>
                            { comments.map((comment) => <div key={comment.id} style={{ marginTop: '20px' }}>
                                <h5>{comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>) }
                        </div>
                }
            </section>
        </div>
    );
};

export default PostDetails;