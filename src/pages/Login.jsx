import React, {useContext} from 'react';
import CoreInput from '../components/UI/CoreInput/CoreInput';
import CoreButton from '../components/UI/CoreButton/CoreButton';
import {AuthContext} from '../context';

const Login = () => {

    const {setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <form onSubmit={login}>
            <h2>Login</h2>
            <CoreInput type='text' placeholder='Please enter the login...'/>
            <CoreInput type='password' placeholder='Please enter the password...'/>
            <CoreButton>Login</CoreButton>
        </form>
    );
};

export default Login;