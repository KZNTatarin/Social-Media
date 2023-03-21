import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import ProfileSetting from './pages/profileSetting/ProfileSetting';

import './styles/app.scss';

function App() {

    const [posts, setPosts] = useState([])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Profile posts={posts} create={createPost} />} />
                    <Route path='/profile-setting' element={<ProfileSetting  />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
