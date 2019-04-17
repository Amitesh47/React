import React from 'react';
import './ShoppingCart.css';
import ShoppingCart from './ShoppingCart';

export default class Form extends React.Component{
    constructor(props){
        super(props);
    }

    AddNewItem() {
        var newDetails = {
            id: this.refs.id.value,
            name: this.refs.name.value,
            rating: this.refs.rating.value,
            img: this.refs.img.value,
            likes: this.refs.likes.value,
            quantity: this.refs.quantity.value
        }
        this.props.addCard(newDetails);

    }

    render(){
        return(
            <div className="form">
            <div className="form-group">
                <label for="id">Product ID</label>
                <input type="text" className="form-control" ref="id" placeholder="Enter id" required/>
            </div>

            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" ref="name" placeholder="Enter Name" required/>
            </div>

            <div className="form-group">
                <label for="rating">Rating</label>
                <input type="number" className="form-control" ref="rating" max-length="10" required/>
            </div>

            <div className="form-group">
                <label for="image">Image Name</label>
                <input type="text" className="form-control" ref="img" placeholder="Enter in jpg format" required/>
            </div>

            <div className="form-group">
                <label for="likes">No of Likes</label>
                <input type="number" className="form-control" ref="likes" required/>
            </div>

            <div className="form-group">
                <label for="quantity">Quantity</label>
                <input type="number" className="form-control" ref="quantity" required/>
            </div>

            <input type="button" className="btn btn-warning Add" onClick={this.AddNewItem.bind(this)} value="Add New Item"/>
            </div>
        )
    }
}