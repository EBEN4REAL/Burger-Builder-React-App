import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDraw.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    let attachClasses = ["SideDrawer", "close"];
    if(props.open){
        attachClasses = ["SideDrawer", "Open"].join(' ');
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className="SideDrawer">
                <Logo height="11%" marginBottom="32px"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    );
}

export default sideDrawer;