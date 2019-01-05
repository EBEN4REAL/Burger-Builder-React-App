import React from 'react';
import './Hamburger.css';
import Hamburger from '../../assets/images/hamburger.png';

const hamburger = (props) => {
    return (
        <div className="Hamburger" onClick={props.clicked}>
            <div className="drawerToggle"></div>
            <div className="drawerToggle"></div>
            <div className="drawerToggle"></div>
        </div>
    )
}

export default hamburger;