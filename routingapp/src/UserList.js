import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
// import UserDetails from './UserDetails';

export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = { allUsers: [] };
    }

    componentDidMount() {
        let thePromise = axios.get('https://api.myjson.com/bins/9klj8');
        thePromise.then(
            (response) => {
                console.log(response.data);
                this.setState({ allUsers: response.data })
            },
            (err) => { }
        )
    }

    showDetails(login){

    }
    render() {
        var names = this.state.allUsers.map(c => <li ><Link to={"/users/"+c.login} >{c.login}</Link></li>)
        return (
            <div>
                <ul>
                    {names}
                </ul>

            </div>
        )
    }
}

