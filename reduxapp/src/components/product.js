import React from 'react';
import './product.css';

export default class Product extends React.Component{
    render() {
        return (
            <div >
                <div className="col-md-4">
                    <div className="card">
                        <div className = "row">
                            <div className="col-md-10">
                                < img className="card-img-top" src={this.props.details.ImageUrl} alt="Card image cap"></img>
                            </div>
                            <div className = "col-md-2">
                                <button className = "btn btn-danger" onClick={this.props.RemoveProduct.bind(null,this.props.details.id)} ><span className = "glyphicon glyphicon-remove"></span></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-title"><h2>{this.props.details.title}</h2></div>

                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Rating: {this.props.details.rating}</li>
                            <li className="list-group-item">Quantity: {this.props.details.quantity}</li>
                            <li className="list-group-item">Likes: {this.props.details.likes}</li>
                        </ul>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2 col-md-offset-2">
                                    <button className="btn btn-primary" onClick = {this.props.IncrementLikes.bind(null,this.props.index)}>Like<span className="glyphicon glyphicon-thumbs-up"></span></button>
                                </div>
                                <div className="col-md-2 ">
                                    <button className="btn btn-warning" onClick = {this.props.DecrementLikes.bind(null,this.props.index)} >Dislike<span className="glyphicon glyphicon-thumbs-down"></span></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                )
    }
}