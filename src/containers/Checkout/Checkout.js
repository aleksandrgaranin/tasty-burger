import React, { Componemt } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

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
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/chackout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCanceled={this.checkoutCanceledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
            </div>

        );
    }
}

export default Checkout;