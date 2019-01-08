import React from 'react';
import classes from './Hamburger.css';
import Hamburger from '../../assets/images/hamburger.png';

const hamburger = (props) => {
    return (
        <div className={classes.Hamburger} onClick={props.clicked}>
            <div className={classes.drawerToggle}></div>
            <div className={classes.drawerToggle}></div>
            <div className={classes.drawerToggle}></div>
        </div>
    )
}

export default hamburger;