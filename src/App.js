import React from 'react';
import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import CoreNavbar from './components/UI/CoreNavbar/CoreNavbar';
import AppRouter from './components/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <CoreNavbar/>
            <div className="App">
                <AppRouter/>
            </div>
        </BrowserRouter>
    )
}
export default App;
