import React, {useState} from 'react';
import CoreInput from './UI/CoreInput/CoreInput';
import CoreButton from './UI/CoreButton/CoreButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', desc: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        create(newPost);
        setPost({ title: '', desc: '' });
    }

    return (
        <form>
            <fieldset className='form-item'>
                <label htmlFor="postName">Post name</label>
                <CoreInput
                    type="text"
                    id={'postName'}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    placeholder={'Enter the name of post...'}
                    value={post.title}
                />
            </fieldset>
            <fieldset className='form-item'>
                <label htmlFor="desc">Post description</label>
                <CoreInput
                    name="description"
                    id="desc"
                    onChange={e => setPost({ ...post, desc: e.target.value })}
                    placeholder={'Enter the description...'}
                    value={post.desc}
                />
            </fieldset>
            <CoreButton onClick={addNewPost}>Create post</CoreButton>
        </form>
    );
};

export default PostForm;