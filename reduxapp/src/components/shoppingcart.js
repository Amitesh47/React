import React from 'react';
import Product from './product';
import './shoppingcart.css';
import Navbar from './navbar.js';

export class ShoppingCart extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        // console.log(this.props);
        var products = this.props.allProducts.map(c => <Product details={c} key={c.id}{...this.props}  />);

        return (
            <React.Fragment>
                <Navbar/>
                <h1 className="jumbotron">Welcome to Online Shopping</h1>
                {products}
            </React.Fragment>

        )
    }
}