import React from 'react';
import Navbar from './navbar';

export default class NewProduct extends React.Component {

    ReadValues(){
        var newProduct = {
            id: this.refs.id.value,
            title: this.refs.title.value,
            price: this.refs.price.value,
            quantity: this.refs.quantity.value,
            rating: this.refs.rating.value,
            likes: this.refs.likes.value,
            ImageUrl: this.refs.img.value
        }
        // console.log(newProduct);
        return this.props.AddNewProduct(newProduct);
    }

    render() {
        // console.log(this.props);
        return (
            <React.Fragment>
                <Navbar />
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="id">Product ID</label>
                        <input type="text" className="form-control" ref="id" placeholder="Enter Id" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Tilte</label>
                        <input type="text" className="form-control" ref="title" placeholder="Enter Title" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Price</label>
                        <input type="text" className="form-control" ref="price" placeholder="Enter Price" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" className="form-control" ref="quantity" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" className="form-control" ref="rating" max-length="10" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="likes">No of Likes</label>
                        <input type="number" className="form-control" ref="likes" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image </label>
                        <input type="text" className="form-control" ref="img" placeholder="Provide the link" required />
                    </div>

                    <input type="button" className="btn btn-warning Add" value="Add New Product" onClick={this.ReadValues.bind(this)}/>
                </div>
            </React.Fragment>
        )
    }
}

