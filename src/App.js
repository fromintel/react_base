import React, {useMemo, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import CoreModal from "./components/UI/CoreModal/CoreModal";
import CoreButton from "./components/UI/CoreButton/CoreButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaa', desc: 'w'},
        {id: 2, title: 'vvv', desc: 'a'},
        {id: 3, title: 'bbb', desc: 'l'},
    ])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [isVisibleModal, setModalVisibility] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
            return posts;
        }
    }, [filter.sort, posts]);
    const searchAndSortedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([ ...posts, newPost ])
        setModalVisibility(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => post.id !== p.id));
    }

    return (
        <div className="App">
            <CoreModal visible={isVisibleModal} setVisible={setModalVisibility}>
                <PostForm create={createPost}/>
            </CoreModal>
            <div className="counters">
                <Counter/>
                <ClassCounter/>
            </div>
            <hr/>
            <CoreButton style={{marginTop: 30}} onClick={() => setModalVisibility(true)}>Create new Post +</CoreButton>
            <section className={'posts-list'}>
                <PostFilter filter={filter} setFilter={setFilter}/>
                <PostList remove={removePost} posts={searchAndSortedPosts} title={'Post List 1'}/>
            </section>

        </div>
    );
}

export default App;
