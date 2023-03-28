import React, { useRef, useState } from 'react';
import MyButton from '../UI/myButton/MyButton';
import MyInput from '../UI/myInput/MyInput';

import './createPost.scss'

const CreatePost = (props) => {

    const [createInput, setCreatInput] = useState('');
    const [createImg, setCreateImg] = useState([]);
    const fileInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
       
        const newPost = {
            id: Date.now(),
            createInput,
            createImg
        }

        props.createPost.create(newPost)
    };

    const handleImageChange = (e) => {
        setCreateImg([...createImg, ...e.target.files]);
    
    }

    return (
        <div className='create'>
            <div className="container">
                <div className="create__wrapp wrapp">
                    <form onSubmit={handleSubmit}>
                        <MyInput
                            placeholder='Что нового?'
                            value={createInput}
                            type="text"
                            onChange={e => setCreatInput(e.target.value)}
                        />
                        <input 
                            onChange={handleImageChange}
                            className='file-select'
                            accept='image/*'
                            type="file"
                            multiple
                            ref={fileInputRef}
                        />
                        <MyButton>Добавить</MyButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;