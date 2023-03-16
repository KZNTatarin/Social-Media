import React from 'react';

import Header from '../../components/header/Header';
import CreatePost from '../../components/createPost/CreatePost';
import PostItem from '../../components/postItem/PostItem';



const Profile = () => {
    return (
        <div>
            <Header/>
            <CreatePost/>
            <h1 style={{textAlign: 'center'}}>Посты</h1>
            <PostItem/>
        </div>
    );
};

export default Profile;