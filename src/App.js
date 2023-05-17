import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import CoreSelect from "./components/UI/CoreSelect/CoreSelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaa', desc: 'w'},
        {id: 2, title: 'vvv', desc: 'a'},
        {id: 3, title: 'bbb', desc: 'l'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([ ...posts, newPost ])
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => post.id !== p.id));
    }

    const sortPosts = (sortValue) => {
        setSelectedSort(sortValue);
        setPosts([...posts].sort((a, b) => a[sortValue].localeCompare(b[sortValue])))
    }

    return (
        <div className="App">
            <div className="counters">
                <Counter/>
                <ClassCounter/>
            </div>
            <hr/>
            <PostForm create={createPost}/>
            <section className={'posts-list'}>
                <div className={'posts-list__sort'}>
                    <CoreSelect
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultOption='Sort by'
                        options={[
                            { title: 'By name', value: 'title' },
                            { title: 'By desc', value: 'desc' },
                        ]}
                    />
                </div>
                { posts.length
                    ? <PostList remove={removePost} posts={posts} title={'Post List 1'}/>
                    : <div>Any post is not found...</div>
                }
            </section>

        </div>
    );
}

export default App;
