import React from 'react';
import classes from  './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../Hamburger/Hamburger';

const toolbar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <Hamburger clicked={props.openSideBar} />
            <Logo />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
    
};

export default toolbar;

