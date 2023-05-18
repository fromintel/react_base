import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import CoreNavbar from './components/UI/CoreNavbar/CoreNavbar';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
        }}>
            <BrowserRouter>
                <CoreNavbar/>
                <div className="App">
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
export default App;
