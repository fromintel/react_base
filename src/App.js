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
import PostsService from './api/PostsService';
import CoreLoader from './components/UI/CoreLoader/CoreLoader';
import {useFetching} from './hooks/useFetching';
import {getPageCount, getPagesArray} from "./utils/pages";
import {usePagination} from "./hooks/usePagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [isVisibleModal, setModalVisibility] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostsService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })
    let pagesArray = usePagination(totalPages, page);

    useEffect(() => {
        fetchPosts();
    }, [])

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
                postError && <div>Something went wrong... {postError}</div>
            }
            {
                isPostsLoading
                    ? <div className='loader-wrapper'><CoreLoader/></div>
                    : <section className={'posts-list'}>
                        <PostFilter filter={filter} setFilter={setFilter}/>
                        <PostList remove={removePost} posts={searchAndSortedPosts} title={'Post List 1'}/>
                    </section>
            }
            <div className='pagination'>
                {
                    pagesArray.map((paginationNumber) =>
                        <span
                            key={paginationNumber}
                            className={
                            paginationNumber === page
                                ? 'pagination__item pagination__item--current'
                                : 'pagination__item'}
                            onClick={() => setPage(paginationNumber)}
                        >
                            {paginationNumber}
                        </span>
                    )
                }
            </div>

        </div>
    );
}

export default App;
