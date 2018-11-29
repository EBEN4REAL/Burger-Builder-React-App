import React from 'react';
import BurgerLogo from '../../assets/images/127 burger-logo.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div className="Logo" 
            style={
                    { 
                        height:props.height,
                        marginBottom: props.marginBottom
                    
                    }
                }>
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    )
    
}

export default logo;