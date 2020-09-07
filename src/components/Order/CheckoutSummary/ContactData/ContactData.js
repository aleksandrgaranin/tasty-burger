import React, {Component} from 'react';

import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';

import classes from './ContactData.module.css';

import axios from '../../../../axios-orders';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHendler = (event) => {
        event.preventDefault(); //important this line prevent reloading the page
        console.log(this.props);

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Aleksandr Garanin',
                address:{
                    street:'Teststreet 1',
                    zipCode: '12412',
                    country: 'USA'
                },
                email: 'text@text.com',
                delivery: 'fastest'
            }
        }
        axios.post('/orders.json', order)
            .then(response => { 
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch( error =>  { 
                this.setState({ loading: false })
            });
    }

    render () {
        let form = (
            <form className={classes.Form}>
                    <input className={classes.Input}type="text" name="name" placeholder="Your Name"/>
                    <input className={classes.Input}type="email" name="email" placeholder="Your E-mail"/>
                    <input className={classes.Input}type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input}type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHendler}>ORDER</Button>
                </form>
        );
        if(this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
} 


export default ContactData;