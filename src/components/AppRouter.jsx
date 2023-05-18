import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Counters from '../pages/Counters';
import Error from '../pages/Error';
import PostDetailsItem from './PostDetailsItem';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostDetailsItem />} />
            <Route path="/counters" element={<Counters />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={ <Navigate to="/error" /> }/>
        </Routes>
    );
};

export default AppRouter;