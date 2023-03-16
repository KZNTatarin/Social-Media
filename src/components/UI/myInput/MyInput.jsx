import React from 'react';

import './myInput.scss';

const MyInput = ({...props}) => {
    return (
        <input className='myInput' {...props}/>
            
    );
};

export default MyInput;