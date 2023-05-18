import Error from '../pages/Error';
import Counters from '../pages/Counters';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostDetails from '../pages/PostDetails';
import Login from '../pages/Login';

export const privateRoutes = [
    { path: '/about', component: About, exact: true },
    { path: '/counters', component: Counters, exact: true },
    { path: '/error', component: Error, exact: true },
    { path: '/posts', component: Posts, exact: true },
    { path: '/posts/:id', component: PostDetails, exact: true },
]

export const publicRoutes = [
    { path: '/login', component: Login, exact: true },
]
