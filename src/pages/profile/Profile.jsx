import React from 'react';

import Header from '../../components/header/Header';
import CreatePost from '../../components/createPost/CreatePost';
import PostItem from '../../components/postItem/PostItem';
import PostList from '../../components/postList/PostList';



const Profile = (props) => {
    return (
        <div>
            <Header/>
            <CreatePost createPost={props} />
            <h1 style={{textAlign: 'center'}}>Посты</h1>
            <PostList props={props}/>
            {/* <PostItem/> */}
        </div>
    );
};

export default Profile;