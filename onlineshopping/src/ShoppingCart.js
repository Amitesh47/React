import React from 'react';
import Product from './Product';

export default class ShoppingCart extends React.Component {
    constructor() {
        super();
        this.state ={cart:
            [
                {
                    id: 101,
                    name: 'Tshirt',
                    rating: 4.5,
                    img: 'tshirt.jpg',
                    likes: 120,
                    quantity: 10
                },
                {
                    id: 102,
                    name: 'Jeans',
                    rating: 4,
                    img: 'jeans.jpg',
                    likes: 112,
                    quantity: 15
                },
                {
                    id: 103,
                    name: 'Shoes',
                    rating: 4.2,
                    img: 'shoes.png',
                    likes: 1232,
                    quantity: 12
                },
                {
                    id: 104,
                    name: 'Sweatshirt',
                    rating: 5,
                    img: 'sweat.jpg',
                    likes: 103,
                    quantity: 145
                },
                {
                    id: 105,
                    name: 'Shades',
                    rating: 4,
                    img: 'sha.png',
                    likes: 120,
                    quantity: 10
                },
                {
                    id: 106,
                    name: 'Formals',
                    rating: 4,
                    img: 'formals.jpg',
                    likes: 120,
                    quantity: 10
                }
            ]
        }

    }

    DeleteTheItem(theid){
        console.log(theid);
        var theNewList = this.state.cart.filter(v => v.id!= theid);
        this.setState({cart: theNewList});
    }



    render() {
        var products = this.state.cart.map(c => <Product details={c} key={c.id} deleteitem={this.DeleteTheItem.bind(this)} />);
        return (
            <div>
                {products}

            </div>
        )
    }
}