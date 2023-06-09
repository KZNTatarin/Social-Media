import React from 'react';

import './myButton.scss';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='myBtn'>
            {children}
        </button>
    );
};

export default MyButton;