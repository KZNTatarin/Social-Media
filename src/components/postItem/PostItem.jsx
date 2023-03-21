import React from 'react';
import MyButton from '../UI/myButton/MyButton';

import './postItem.scss';

const PostItem = (props) => {
    console.log(props);
    return (
        <div>
            <div className="container">
                <div className="post">
                    <div className="wrapp post__wrapp">
                        <div className="post__text">{props.post.createInput}</div>
                        <div className="post__img"><img src={ props.post.createImg ? URL.createObjectURL(props.post.createImg) : ""} alt="" /></div>
                        <div className="post__setting"><MyButton>...</MyButton></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;