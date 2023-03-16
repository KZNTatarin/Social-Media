import React from 'react';
import MyButton from '../UI/myButton/MyButton';

import './postItem.scss';

const PostItem = () => {
    return (
        <div>
            <div className="container">
                <div className="post">
                    <div className="wrapp post__wrapp">
                        <div className="post__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aperiam eos officia quo a tempora eum sit, mollitia animi, aliquam ea blanditiis eius, commodi aut quia autem itaque! Molestiae, sunt?</div>
                        <div className="post__setting"><MyButton>...</MyButton></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;