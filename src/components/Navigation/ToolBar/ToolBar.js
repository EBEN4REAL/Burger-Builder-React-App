import React from 'react';
import  './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../Hamburger/Hamburger';

const toolbar = (props) => {
    return (
        <header className="ToolBar">
            <Hamburger clicked={props.openSideBar} />
            <Logo />
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
    
};

export default toolbar;

