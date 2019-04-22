import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            login: props.match.params.login,
            allUsers: []
        }
    }
    componentDidMount() {
        let thePromise = axios.get('https://api.myjson.com/bins/9klj8');
        thePromise.then(
            (response) => {
                console.log(response.data);
                this.setState({ 
                    allUsers: response.data.filter(user=>{
                        return user.login === this.state.login
                    }) 
                })
            },
            (err) => { }
        )
    }
    render() {
        return (
            <div>
                {/* <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src={this.props.details.avatar_url} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.details.login}</h5>
                            <p class="card-text">ID : {this.props.details.id}</p>
                            
                        </div>
          </div> */}
                {JSON.stringify(this.state.allUsers)}
                </div>
                )
    }
}