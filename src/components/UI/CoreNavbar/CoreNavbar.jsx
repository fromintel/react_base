import React from 'react';
import {Link} from "react-router-dom";

const CoreNavbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__items'>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/counters">Counters</Link>
            </div>
        </nav>
    );
};

export default CoreNavbar;