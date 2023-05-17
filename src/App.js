import React, {useMemo, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import CoreSelect from "./components/UI/CoreSelect/CoreSelect";
import CoreInput from "./components/UI/CoreInput/CoreInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaa', desc: 'w'},
        {id: 2, title: 'vvv', desc: 'a'},
        {id: 3, title: 'bbb', desc: 'l'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [search, setSearch] = useState('')

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        } else {
            return posts;
        }
    }, [selectedSort, posts]);

    const searchAndSortedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(search))
    }, [search, sortedPosts])

    const createPost = (newPost) => {
        setPosts([ ...posts, newPost ])
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => post.id !== p.id));
    }

    const sortPosts = (sortValue) => {
        setSelectedSort(sortValue);
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
                <div className="post-list__search">
                    <CoreInput
                        placeholder='Search...'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                { searchAndSortedPosts.length
                    ? <PostList remove={removePost} posts={searchAndSortedPosts} title={'Post List 1'}/>
                    : <div>Any post is not found...</div>
                }
            </section>

        </div>
    );
}

export default App;
