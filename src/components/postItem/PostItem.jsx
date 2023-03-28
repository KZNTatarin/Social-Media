import React from 'react';
import MyButton from '../UI/myButton/MyButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';

import './postItem.scss';

const PostItem = (props) => {
    console.log(props);
    return (
        <div>
            <div className="container">
                <div className="post">
                    <div className="wrapp post__wrapp">
                        <div className='post__content'>
                            <div className="post__text">{props.post.createInput}</div>
                            <br />
                            <div className="post__img">
                                <Swiper
                                    modules={[Navigation, Pagination,]}
                                    spaceBetween={25}
                                    pagination={{ clickable: true }}
                                >
                                    {props.post.createImg.map((img) =>
                                        (<SwiperSlide><img className='post-img' src={URL.createObjectURL(img)} alt="" /></SwiperSlide>)
                                    )}
                                </Swiper>

                            </div>
                        </div>
                        <div className="post__setting"><MyButton>...</MyButton></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;