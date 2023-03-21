import React from 'react';

import PostItem from '../postItem/PostItem';

const PostList = (props) => {

    return (
        <div>
            {props.props.posts.map( (post) => <PostItem post={post}/> )}
        </div>
    );
};

export default PostList;