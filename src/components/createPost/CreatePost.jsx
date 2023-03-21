import React, { useState } from 'react';
import MyButton from '../UI/myButton/MyButton';
import MyInput from '../UI/myInput/MyInput';

import './createPost.scss'

const CreatePost = (props) => {

    const [createInput, setCreatInput] = useState('');
    const [createImg, setCreateImg] = useState(null);

    const addNewPost = async (e) => {
        e.preventDefault()

        const newPost = {
            id: Date.now(),
            createInput,
            createImg
        }

        props.createPost.create(newPost)

        setCreatInput('');
        setCreateImg(null);
      
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const files = e.target.files;
        console.log(files);
    };

    const handleImageChange = (e) => {
        const selectedImg = e.target.files;
        setCreateImg([selectedImg])
        console.log(selectedImg);
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
                        />
                        <MyButton onClick={addNewPost}>Добавить</MyButton>
                        {createImg && <img src={URL.createObjectURL(createImg)} alt="selected image" />}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;