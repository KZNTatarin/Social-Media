import React, { useState } from 'react';
import MyButton from '../UI/myButton/MyButton';
import MyInput from '../UI/myInput/MyInput';

import './createPost.scss'

const CreatePost = () => {

    const [createInput, setCreatInput] = useState('');

    return (
        <div className='create'>
            <div className="container">
                <div className="create__wrapp wrapp">
                    <form action="">
                        <MyInput
                            placeholder='Что нового?'
                            value={createInput}
                            type="text"
                            onChange={e => setCreatInput(e.target.value)}
                        />
                        <input className='file-select'  accept='image/*' type="file" />
                        <MyButton>Добавить</MyButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;