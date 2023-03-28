import React, { useEffect, useState } from 'react';
import MyInput from '../../components/UI/myInput/MyInput';

import './profileSetting.scss';

import EmptyAva from '../../img/empty-ava.jpg';
import MyButton from '../../components/UI/myButton/MyButton';



const ProfileSetting = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
    });

    const changeState = (nameOfField, value) => {
        setUser({...user, [nameOfField]: value});
    };

    const handleSaveButtonClick = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3001/users/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        console.log(await response.json(), "после отправки данных получили ответ");
    };

    return (
        <div>
            <div className="container">
                <div className="wrapp setting__wrapp">
                    <form onSubmit={handleSaveButtonClick} action="">

                        <div className="setting__img">
                            <img src={EmptyAva} alt="" />
                            <input type="file" />
                        </div>
                        <div className="setting__name">
                            <MyInput
                                onChange={e => changeState("name", e.target.value)}
                                value={user.name} />
                            <MyInput
                                onChange={e => changeState("surname", e.target.value)}
                                value={user.surname} />
                            <MyButton onClick={handleSaveButtonClick}>Сохранить</MyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetting;