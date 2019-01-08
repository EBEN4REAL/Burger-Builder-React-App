import React, {Component} from 'react';
import axios from "../../../axios-orders";
import {withRouter} from 'react-router-dom';


import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import  classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: event.name,
                address: {
                    street: "Agiliti",
                    country: "Nigeria"
                },
                email: "eben@gmail.com",
                deliveryMethod: "fastest",
                price: this.state.totalPrice
            },

        }
         axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: true , purchasing: false});
                this.props.history.push('/');
            }).catch(error => {
                this.setState(
                   (oldState) => {
                        return  {
                            loading: false,
                            purchasing: false
                        }
                   }
                );
         })
        console.log(this.props.ingredients);
    }
    render(){
        let form = (
            <form>
                <input type="text" name="name" placeholder="Name" className={classes.ContactForm} />
                <input type="email" name="name" placeholder="Email" className={classes.ContactForm} />
                <input type="text" name="street" placeholder="Street" className={classes.ContactForm} />
                <input type="text" name="postal" placeholder="Postal" className={classes.ContactForm} />
                <Button btnType="success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.Contactdata}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        )
    }
}
export default ContactData;