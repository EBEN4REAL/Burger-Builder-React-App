import React from 'react';
import './button.css';


const button = (props) => {
    return (
        <button 
            onClick={props.clicked}
            className={props.btnType}>{props.children}</button>
    )
}

export default button;