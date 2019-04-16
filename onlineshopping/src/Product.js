import React from 'react';
import './Product.css'
import ShoppingCart from './ShoppingCart';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.details.name,
            rating: this.props.details.rating,
            img: this.props.details.img,
            likes: this.props.details.likes,
            quantity: this.props.details.quantity
        }
    }
    IncrementLikes() {
        this.setState({ likes: this.state.likes + 1 });
    }

    DecrementLikes() {

        this.setState({ likes: this.state.likes - 1 });

    }

    render() {
        return (
            <div >
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={this.state.img} alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title"><h2>{this.state.name}</h2></h5>

                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Rating: {this.state.rating}</li>
                            <li className="list-group-item">Quantity: {this.state.quantity}</li>
                            <li className="list-group-item">Likes: {this.state.likes}</li>
                        </ul>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2 col-md-offset-2">
                                    <button className="btn btn-primary" onClick={this.IncrementLikes.bind(this)}>Like<span className="glyphicon glyphicon-thumbs-up"></span></button>
                                </div>
                                <div className="col-md-2 ">
                                    <button className="btn btn-warning" onClick={this.DecrementLikes.bind(this)}>Dislike<span className="glyphicon glyphicon-thumbs-down"></span></button>
                                </div>
                                <div className="col-md-2 col-md-offset-4 ">
                                    <button className = "btn btn-danger" onClick = {this.props.deleteitem.bind(this,this.props.details.id)}><span className = "glyphicon glyphicon-remove"></span></button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                )
    }
}