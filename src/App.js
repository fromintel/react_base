import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post 1', desc: 'Post 1 description'},
        {id: 2, title: 'Post 2', desc: 'Post 2 description'},
        {id: 3, title: 'Post 3', desc: 'Post 3 description'},
    ])

    const createPost = (newPost) => {
        setPosts([ ...posts, newPost ])
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => post.id !== p.id));
    }

    return (
        <div className="App">
            <div className="counters">
                <Counter/>
                <ClassCounter/>
            </div>
            <PostForm create={createPost}/>
            { posts.length
                ? <PostList remove={removePost} posts={posts} title={'Post List 1'}/>
                : <div>Any post is not found...</div>
            }

        </div>
    );
}

export default App;
