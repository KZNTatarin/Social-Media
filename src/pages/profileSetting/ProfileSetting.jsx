import React from 'react';
import MyInput from '../../components/UI/myInput/MyInput';

import './profileSetting.scss';

import EmptyAva from '../../img/empty-ava.jpg';
import MyButton from '../../components/UI/myButton/MyButton';

const ProfileSetting = () => {
    return (
        <div>
            <div className="container">
                <div className="wrapp setting__wrapp">
                    <form action="">

                        <div className="setting__img">
                            <img src={EmptyAva} alt="" />
                            <input type="file" />
                        </div>
                        <div className="setting__name">
                            <MyInput
                                // onChange={e => setCreatInput(e.target.value)}
                                value='Name' />
                            <MyInput
                                // onChange={e => setCreatInput(e.target.value)}
                                value='Surname' />
                            <MyButton>Сохранить</MyButton>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ProfileSetting;