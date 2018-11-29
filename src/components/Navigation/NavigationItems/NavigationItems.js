import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Burger</NavigationItem>
            <NavigationItem link="/" active={false}>Checkout</NavigationItem>
        </ul>
    )
}

export default navigationItems;
