import React from 'react';
import Product from './Product';
import Form from './Form';
import axios from 'axios';
import './ShoppingCart.css';

import Progress from './Progress';

export default class ShoppingCart extends React.Component {
    constructor() {
        super();
        // console.log("construtor");
        this.state = { cart: [] }
    }

    DeleteTheItem(theid) {
        // console.log(theid);
        var theNewList = this.state.cart.filter(v => v.id != theid);
        this.setState({ cart: theNewList });
    }

    NewState(obj) {
        this.setState({ cart: [...this.state.cart, obj] })
    }


    componentWillMount() {
        // console.log('within parent componentWillMount..');
    }

    componentDidMount() {
        // console.log('within parent componentDidMount..');
        let thePromise = axios.get('https://api.myjson.com/bins/rwxws');
        thePromise.then(
            (response) => {
                console.log(response.data);
                this.setState({ cart: response.data })
            },
            (err) => { }
        )
    }


    shouldComponentUpdate() {
        // console.log('within parent shouldComponentupdate..');
        return true;
    }

    componentWillUpdate() {
        // console.log('within parent componentwillUpdate..');

    }

    componentDidUpdate() {
        // console.log('within parent componentDidUpdate..');
    }



    render() {
        // console.log("rendfer");
        if (this.state.cart.length == 0) {
            var products = <Progress />
        } else {
            var products = this.state.cart.map(c => <Product details={c} key={c.id} deleteitem={this.DeleteTheItem.bind(this)} />);
        }
        return (
            <div>
                <Form addCard={this.NewState.bind(this)} />

                {products}
            </div>

        )
    }
}
