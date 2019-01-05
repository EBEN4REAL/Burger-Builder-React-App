import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
   componentWillUpdate() {
       console.log('[OrderSummary] willUpdate ');
   }
    render() {
         const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
           return  (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>
                    {this.props.ingredients[igKey]}
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
                <p><strong>Total Prica: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;