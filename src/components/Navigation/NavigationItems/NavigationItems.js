import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Burger</NavigationItem>
            <NavigationItem link="/orders">Order</NavigationItem>
        </ul>
    )
}

export default navigationItems;
