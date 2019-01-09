import React, {Component} from 'react';
import axios from "../../../axios-orders";
import {withRouter} from 'react-router-dom';


import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import  classes from './ContactData.css';
import Input from '../../../components/UI/Input/Input';

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
            price: this.props.price,
            customer: {
                name: event.name,
                address: {
                    street: "Agiliti",
                    country: "Nigeria"
                },
                email: "eben@gmail.com",
                deliveryMethod: "fastest",
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
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        let form = (
            <form>
                <h4>Enter your contact Data</h4>
                <Input inputtype="input"  type="text" name="name" placeholder="Name" />
                <Input inputtype="input" name="name" type="email" placeholder="Email" />
                <Input inputtype="input" name="street" type="text" placeholder="Street" />
                <Input inputtype="input" name="postal"  type="text" placeholder="Postal" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.Contactdata}>
                {form}
            </div>
        )
    }
}
export default ContactData;