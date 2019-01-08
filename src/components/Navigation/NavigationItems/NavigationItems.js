import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/orders">Order</NavigationItem>
            <NavigationItem link="/" exact>Burger</NavigationItem>
        </ul>
    )
}

export default navigationItems;
