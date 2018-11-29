import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
           return  (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>
                    {props.ingredients[igKey]}
                </li>
           )
           
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious Burger with the following ingredients</p>
             <ul>
                 {ingredientsSummary}
             </ul>
             <p><strong>Total Prica: {props.price.toFixed(2)}</strong></p>
             <p>Continue to checkout?</p>
             <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
             <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary;