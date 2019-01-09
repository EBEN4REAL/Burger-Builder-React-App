import React from 'react';

import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName],
        })
    }

    const ingredientsJsx = ingredients.map(ig => {
        return (
            <span 
                style={
                    { 
                        "border": "1px solid #ccc",
                        "margin": "5px",
                        "border-radius": "5px",
                        "padding": "5px"
                     }
                }
                key={ig.name}>{ig.name.charAt(0).toUpperCase() + ig.name.substr(1)} {ig.amount} </span>
        )
    })
    return (
        <div className={classes.Order}>
            <p>
                Ingredients: &nbsp;&nbsp;
                {ingredientsJsx}
            </p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}
export default order;