import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls =(props) => {
    return (
            <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
            return <BuildControl key={ctrl.label}
                label={ctrl.label}
                added={() =>  props.ingredientsAdded(ctrl.type)}
                removed={() => props.removeIngredients(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
            })}
            <button 
                className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}


export default BuildControls;