import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import ProfileSetting from './pages/profileSetting/ProfileSetting';

import './styles/app.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile-setting' element={<ProfileSetting />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
