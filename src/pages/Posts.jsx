import React, {useEffect, useRef, useState} from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import CoreModal from '../components/UI/CoreModal/CoreModal';
import CoreButton from '../components/UI/CoreButton/CoreButton';
import {usePosts} from '../hooks/usePosts';
import PostsService from '../api/PostsService';
import CoreLoader from '../components/UI/CoreLoader/CoreLoader';
import {useFetching} from '../hooks/useFetching';
import {getPageCount} from '../utils/pages';
import CorePagination from '../components/UI/CorePagination/CorePagination';
import {useObserver} from "../hooks/useObserver";
import CoreSelect from "../components/UI/CoreSelect/CoreSelect";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [isVisibleModal, setModalVisibility] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostsService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })
    const lastElem = useRef();

    useObserver(lastElem, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts();
    }, [page, limit]);

    const changePage = (currentPage) => {
        setPage(currentPage);
    }

    const createPost = (newPost) => {
        setPosts([ ...posts, newPost ])
        setModalVisibility(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => post.id !== p.id));
    }

    return (
        <div>
            <CoreModal visible={isVisibleModal} setVisible={setModalVisibility}>
                <PostForm create={createPost}/>
            </CoreModal>
            <CoreButton onClick={fetchPosts}>get posts</CoreButton>
            <CoreButton style={{marginTop: 30}} onClick={() => setModalVisibility(true)}>Create new Post +</CoreButton>
            {
                postError && <div>Something went wrong... {postError}</div>
            }
            <section className={'posts-list'}>
                <PostFilter filter={filter} setFilter={setFilter}/>
                <CoreSelect
                    value={limit}
                    onChange={(value) => setLimit(value)}
                    defaultOption='Set a total entities to fetch by scroll'
                    options={[
                        { value: 5, title: '5' },
                        { value: 10, title: '10' },
                        { value: 15, title: '15' },
                        { value: 25, title: '25' },
                        { value: -1, title: 'All posts' }
                    ]}/>
                <PostList remove={removePost} posts={searchAndSortedPosts} title={'Post List 1'}/>
                <div ref={lastElem} style={{height: '20px'}}/>
            </section>
            {
                isPostsLoading && <div className='loader-wrapper'><CoreLoader/></div>
            }
            <CorePagination
                page={page}
                totalPages={totalPages}
                changePage={changePage}
            />

        </div>
    );
}

export default Posts;
