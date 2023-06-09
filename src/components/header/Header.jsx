import React, { useEffect, useState } from 'react';
import MyButton from '../UI/myButton/MyButton';

import EmptyAva from '../../img/empty-ava.jpg'

import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
    })

    useEffect(() => {
        fetch(`http://localhost:3001/users/1`)
            .then((response) => response.json())
            .then((data) => setUser({
                name: data.name,
                surname: data.surname
            }));
    }, [])


    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapp wrapp">

                    <div className="header__content">
                        <div className="header__data">
                            <div className="header__img"><img src={EmptyAva} alt="Ава" /></div>
                            <div className="header__name">{user.name} {user.surname}</div>
                        </div>
                        <div className="header__setting">
                            <Link to={'profile-setting'}><MyButton>Редактировать</MyButton></Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;