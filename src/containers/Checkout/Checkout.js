import React, { Componemt } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../components/Order/CheckoutSummary/ContactData/ContactData';

const { Component } = require("react");


class Checkout extends Component{
    state ={
        ingredients:{
            salad:1,
            meat:1,
            bacon:1,
            cheese:1
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            // ['salat', '1']
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/chackout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCanceled={this.checkoutCanceledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>

        );
    }
}

export default Checkout;