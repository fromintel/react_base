import React, {useEffect, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import CoreModal from './components/UI/CoreModal/CoreModal';
import CoreButton from './components/UI/CoreButton/CoreButton';
import {usePosts} from './hooks/usePosts';
import PostsService from "./api/PostsService";
import CoreLoader from "./components/UI/CoreLoader/CoreLoader";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [isVisibleModal, setModalVisibility] = useState(false);
    const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostLoading, setPostLoadState] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, [])

    async function fetchPosts() {
        setPostLoadState(true);
        const posts = await PostsService.getAll();
        setPosts(posts);
        setPostLoadState(false);
    }

    const createPost = (newPost) => {
        setPosts([ ...posts, newPost ])
        setModalVisibility(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => post.id !== p.id));
    }

    return (
        <div className='App'>
            <CoreModal visible={isVisibleModal} setVisible={setModalVisibility}>
                <PostForm create={createPost}/>
            </CoreModal>
            <div className='counters'>
                <Counter/>
                <ClassCounter/>
            </div>
            <hr/>
            <CoreButton onClick={fetchPosts}>get posts</CoreButton>
            <CoreButton style={{marginTop: 30}} onClick={() => setModalVisibility(true)}>Create new Post +</CoreButton>
            {
                isPostLoading
                    ? <div className='loader-wrapper'><CoreLoader/></div>
                    : <section className={'posts-list'}>
                        <PostFilter filter={filter} setFilter={setFilter}/>
                        <PostList remove={removePost} posts={searchAndSortedPosts} title={'Post List 1'}/>
                    </section>
            }

        </div>
    );
}

export default App;
