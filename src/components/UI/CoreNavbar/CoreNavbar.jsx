import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import CoreButton from '../CoreButton/CoreButton';
import {AuthContext} from '../../../context';

const CoreNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <nav className='navbar'>
            {
                isAuth && <CoreButton onClick={logout}>Logout</CoreButton>
            }
            <div className='navbar__items'>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/counters">Counters</Link>
            </div>
        </nav>
    );
};

export default CoreNavbar;