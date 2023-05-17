import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import CoreButton from "./components/UI/CoreButton/CoreButton";
import CoreInput from "./components/UI/CoreInput/CoreInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post 1', desc: 'Post 1 description'},
        {id: 2, title: 'Post 2', desc: 'Post 2 description'},
        {id: 3, title: 'Post 3', desc: 'Post 3 description'},
    ])

    const [title, setTitle] = useState('test title');
    const [desc, setDesc] = useState('');

    const descRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            desc
        }
        console.log(newPost)
        setPosts([...posts, newPost]);
        resetPostForm();
    }

    const resetPostForm = () => {
        setTitle('');
        setDesc('');
    }

    return (
        <div className="App">
            <div className="counters">
                <Counter/>
                <ClassCounter/>
            </div>
            <form>
                <fieldset>
                    <label htmlFor="postName">Post name</label>
                    <CoreInput
                        type="text"
                        id={'postName'}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={'Enter the name of post...'}
                        value={title}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="desc">Post description</label>
                    <CoreInput
                        name="description"
                        id="desc"
                        onChange={e => setDesc(e.target.value)}
                        placeholder={'Enter the description...'}
                        value={desc}
                        ref={descRef}
                    />
                </fieldset>
                <CoreButton onClick={addNewPost}>test</CoreButton>
            </form>
            <PostList posts={posts} title={'Post List 1'}/>
        </div>
    );
}

export default App;
